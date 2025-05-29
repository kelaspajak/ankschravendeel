import type { BlockSchema } from "@/schemas/block"

// Get all blocks as an object
const blockImports = import.meta.glob("../blocks/**/*.tsx", {
  eager: true,
})

// Render all blocks
function Blocks({ blocks }: { blocks?: (BlockSchema & { block: string })[] }) {
  return (
    <>
      {blocks?.map(({ block, ...props }, i) => {
        // Find the block in the blockImports object
        const blockPath = `../blocks/${block}.tsx`
        const blockImport = blockImports[blockPath] as any
        const BlockComponent = blockImport?.default

        // Render the block
        return BlockComponent ? (
          <BlockComponent key={blockPath} {...props} />
        ) : null
      })}
    </>
  )
}

export { Blocks }
