// Get all blocks as an object
const blockImports = import.meta.glob("../blocks/**/*.tsx", {
  eager: true,
})

// Render all blocks
function Blocks({ blocks }: { blocks: string[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        // Find the block in the blockImports object
        const blockKey = Object.keys(blockImports).find((key) =>
          key.endsWith(block)
        )

        // Get the block component
        const blockObject = blockImports[blockKey as any] as any
        const BlockComponent = blockObject?.default

        // Render the block
        return BlockComponent ? <BlockComponent key={blockKey} /> : null
      })}
    </>
  )
}

export { Blocks }
