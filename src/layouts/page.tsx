import { Banner1 } from "@/blocks/banner-1.tsx"
import { Footer1 } from "@/blocks/footer-1.tsx"
import { Header1 } from "@/blocks/header-1.tsx"
import type { PageSchema } from "@/schemas/page"

import { Layout } from "@/components/layout.tsx"

export default function Page({
  seo,
  children,
}: PageSchema & { children: React.ReactNode }) {
  return (
    <Layout seo={seo}>
      <Banner1 />
      <Header1 />
      <main>
        hello wolrd
        {children}
      </main>
      <Footer1 />
    </Layout>
  )
}
