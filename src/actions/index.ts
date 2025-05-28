import fs from "node:fs/promises"
import generate from "@babel/generator"
import parser from "@babel/parser"
import { default as traverse } from "@babel/traverse"
import type { NodePath } from "@babel/traverse"
import type { JSXText, StringLiteral } from "@babel/types"
import { defineAction } from "astro:actions"
import { z } from "astro:schema"
import { parse, stringify } from "yaml"

export const server = {
  editPage: defineAction({
    input: z.object({
      id: z.string(),
      title: z.string().optional(),
      description: z.string().optional(),
    }),
    handler: async (input) => {
      const { id, title, description } = input
      const filePath = `src/content/pages/${
        id === "index" ? "index.md" : `${id}.md`
      }`
      const fileContent = await fs.readFile(filePath, "utf-8")

      const frontmatter = fileContent.match(/^---\n([\s\S]*?)\n---/)
      const frontmatterData = parse(frontmatter?.[1] || "")

      const updatedFrontmatterData = {
        ...frontmatterData,
        title: title || frontmatterData.title,
        description: description || frontmatterData.description,
      }

      const updatedFileContent = `---\n${stringify(
        updatedFrontmatterData
      )}\n---\n`

      await fs.writeFile(filePath, updatedFileContent, "utf-8")
    },
  }),
  editBlock: defineAction({
    input: z.object({
      blockId: z.string(),
      newText: z.string(),
      editId: z.string(),
    }),
    handler: async ({ blockId, newText, editId }) => {
      try {
        console.log("Action called with:", { blockId, newText, editId })

        const blockPath = `src/blocks/${blockId}.tsx`
        const fileContent = await fs.readFile(blockPath, "utf-8")

        // Simple regex to find element with data-edit attribute and capture its innerHTML
        const regex = new RegExp(
          `(<[^>]*data-edit="${editId}"[^>]*>)([\\s\\S]*?)(<\/[^>]+>)`,
          "g"
        )

        const found = fileContent.match(regex)
        console.log({ found })

        // Replace just the innerHTML (the content between opening and closing tags)
        const updatedContent = fileContent.replace(
          regex,
          (match, openingTag, innerHTML, closingTag) => {
            console.log("Found match:", { openingTag, innerHTML, closingTag })
            const modifiedNewText = newText.replace(/<br\s*\/?>/g, "<br/>")
            return openingTag + modifiedNewText + closingTag
          }
        )

        // Write the updated content back to the file
        await fs.writeFile(blockPath, updatedContent, "utf-8")

        console.log("File updated successfully")
        return { success: true }
      } catch (error) {
        console.error("Error in editBlock action:", error)
        throw error
      }
    },
  }),
}
