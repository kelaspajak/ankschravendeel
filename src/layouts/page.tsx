import { Banner1 } from "@/blocks/banner-1"
import { Footer1 } from "@/blocks/footer-1"
import { Header1 } from "@/blocks/header-1"
import type { PageSchema } from "@/schemas/page"

import { Blocks } from "@/components/blocks"
import { Layout } from "@/components/layout"

export default function Page({ seo, sections }: PageSchema) {
  return (
    <Layout seo={seo}>
      <Banner1 />
      <Header1 />
      <main>
        <Blocks blocks={sections ?? []} />
      </main>
      <Footer1 />
    </Layout>
  )
}
