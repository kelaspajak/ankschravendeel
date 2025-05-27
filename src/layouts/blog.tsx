import { Banner1 } from "@/blocks/banner-1.tsx"
import { Footer1 } from "@/blocks/footer-1.tsx"
import { Header1 } from "@/blocks/header-1.tsx"
import type { BlogSchema } from "@/schemas/blog"

import { Layout } from "@/components/layout.tsx"

export default function Blog({
  title,
  description,
  image,
  children,
  seo,
}: BlogSchema) {
  return (
    <Layout seo={seo}>
      <Banner1 />
      <Header1 />
      <main className="relative w-full py-16">
        <article>
          <h1>{title}</h1>
          <p>{description}</p>
        </article>
      </main>
      <Footer1 />
    </Layout>
  )
}
