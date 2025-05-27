import { Banner1 } from "@/blocks/banner-1"
import { Footer1 } from "@/blocks/footer-1"
import { Header1 } from "@/blocks/header-1"
import type { BlogSchema } from "@/schemas/blog"

import { Layout } from "@/components/layout"

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
