import { linkSchema } from "@/schemas/link"

export const menuSchema = linkSchema
  .extend({
    links: linkSchema.array(),
  })
  .partial()
  .strict()
