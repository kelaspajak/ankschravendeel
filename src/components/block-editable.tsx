import * as React from "react"
import { actions } from "astro:actions"

// Get all blocks as an object
const blockImports = import.meta.glob(`/src/blocks/**/*.tsx`, {
  eager: true,
})

// Render all blocks
function Block({ block }: { block: string }) {
  // Get the block
  const blockPath = `/src/blocks/${block}.tsx`
  const blockImport = blockImports[blockPath] as any
  const BlockComponent = blockImport?.default

  // Get the wrapper
  const componentRef = React.useRef<HTMLDivElement>(null)

  // Make the block editable
  React.useEffect(() => {
    // If the component is not mounted, return
    if (!componentRef.current) return

    // Get all the elements that are editable using data-edit attribute
    const elements = componentRef.current.querySelectorAll(
      "[data-edit-element]"
    )

    // Make the elements editable
    elements.forEach((element) => {
      // Make the element editable
      element.setAttribute("contenteditable", "true")

      // When the element is blurred (clicked outside of the element), save the changes
      element.addEventListener("blur", async (e) => {
        const target = e.target as HTMLElement
        const elementId = target.getAttribute("data-edit-element")
        const newContent = target.innerHTML || ""

        if (elementId) {
          await actions.editBlock({
            blockId: block,
            newContent,
            elementId,
          })
        }
      })
    })

    // When the component is unmounted, remove the editable elements
    return () => {
      elements.forEach((element) => {
        element.removeAttribute("contenteditable")
        element.removeEventListener("blur", () => {})
      })
    }
  }, [])

  // Render the block
  return BlockComponent ? (
    <div ref={componentRef}>
      <BlockComponent />
    </div>
  ) : null
}

export { Block }
