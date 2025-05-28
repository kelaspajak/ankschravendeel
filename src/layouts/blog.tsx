import type { BlogSchema } from "@/schemas/blog"

import { Layout } from "@/components/layout"

export default function Blog({ title, seo }: BlogSchema) {
  return (
    <Layout seo={seo}>
      <main className="relative w-full py-16">
        <article>
          <h1>{title}</h1>
        </article>
      </main>
    </Layout>
  )
}
