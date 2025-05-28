import type { ArticleSchema } from "@/schemas/article"

import { Layout } from "@/components/layout"

export default function Article({
  title,
  description,
  children,
  seo,
}: ArticleSchema & {
  children: React.ReactNode
}) {
  return (
    <Layout seo={seo}>
      <main className="relative w-full py-16">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center px-4 lg:px-8">
          <h1 className="text-center text-6xl font-bold">{title}</h1>
          <p className="mt-4 text-center text-xl">{description}</p>
          <div data-cms-edit="content">{children}</div>
        </div>
      </main>
    </Layout>
  )
}
