import * as React from "react"
import { actions } from "astro:actions"

import { updateTSXFile } from "@/lib/ast-manipulation"

// Get all blocks as an object
const blockImports = import.meta.glob(`/src/blocks/**/*.tsx`, {
  eager: true,
})

// Render all blocks
function Block({ id }: { id: string }) {
  // Get the block
  const path = `/src/blocks/${id}.tsx`
  const block = blockImports[path] as any
  const BlockComponent = block?.default

  // Get the wrapper
  const componentRef = React.useRef<HTMLDivElement>(null)

  // Make the block editable
  React.useEffect(() => {
    if (!componentRef.current) return

    const elements = componentRef.current.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, a"
    )

    elements.forEach((element) => {
      element.setAttribute("contenteditable", "true")

      element.addEventListener("blur", async (e) => {
        const target = e.target as HTMLElement
        const originalText = target.getAttribute("data-original-text") || ""
        const newText = target.textContent || ""

        try {
          // Update the TSX file using AST manipulation
          await updateTSXFile(path, originalText, newText)

          // Update the UI state
          element.setAttribute("data-original-text", newText || "")

          // Notify the server about the change
          await actions.editBlock({
            id,
            target: originalText,
            value: newText,
          })
        } catch (error) {
          console.error("Error updating block:", error)
          // Revert the content if there was an error
          target.textContent = originalText
        }
      })
    })

    return () => {
      elements.forEach((element) => {
        element.removeAttribute("contenteditable")
        element.removeEventListener("input", () => {})
      })
    }
  }, [])

  // Render the block
  return BlockComponent ? (
    <div ref={componentRef} data-block-id={id}>
      <BlockComponent />
    </div>
  ) : null
}

export { Block }
