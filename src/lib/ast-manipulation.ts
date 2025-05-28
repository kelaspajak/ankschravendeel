import fs from "fs/promises"
import path from "path"
import generate from "@babel/generator"
import * as parser from "@babel/parser"
import traverse, { NodePath } from "@babel/traverse"
import * as t from "@babel/types"

interface TextNode {
  type: string
  value: string
  loc?: {
    start: { line: number; column: number }
    end: { line: number; column: number }
  }
}

export async function updateTSXFile(
  filePath: string,
  originalText: string,
  newText: string
): Promise<void> {
  try {
    // Read the file content
    const content = await fs.readFile(filePath, "utf-8")

    // Parse the TSX file into an AST
    const ast = parser.parse(content, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    })

    // Find and update the text node
    let found = false
    traverse(ast, {
      JSXText(path: NodePath<t.JSXText>) {
        if (path.node.value.trim() === originalText.trim()) {
          path.node.value = newText
          found = true
        }
      },
      StringLiteral(path: NodePath<t.StringLiteral>) {
        if (path.node.value === originalText) {
          path.node.value = newText
          found = true
        }
      },
    })

    if (!found) {
      throw new Error(`Could not find text "${originalText}" in the file`)
    }

    // Generate the updated code
    const output = generate(ast, {
      retainLines: true,
      compact: false,
    })

    // Write the updated content back to the file
    await fs.writeFile(filePath, output.code)
  } catch (error) {
    console.error("Error updating TSX file:", error)
    throw error
  }
}

export function findTextNodeInAST(ast: t.File, text: string): TextNode | null {
  let foundNode: TextNode | null = null

  traverse(ast, {
    JSXText(path: NodePath<t.JSXText>) {
      if (path.node.value.trim() === text.trim()) {
        foundNode = {
          type: "JSXText",
          value: path.node.value,
          loc: path.node.loc,
        }
      }
    },
    StringLiteral(path: NodePath<t.StringLiteral>) {
      if (path.node.value === text) {
        foundNode = {
          type: "StringLiteral",
          value: path.node.value,
          loc: path.node.loc,
        }
      }
    },
  })

  return foundNode
}
