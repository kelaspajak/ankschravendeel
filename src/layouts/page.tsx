import type { PageSchema } from "@/schemas/page"

import { Blocks } from "@/components/blocks"
import { Layout } from "@/components/layout"

export default function Page({ seo, sections }: PageSchema) {
  return (
    <Layout seo={seo}>
      <main>
        <Blocks blocks={sections ?? []} />
      </main>
    </Layout>
  )
}
