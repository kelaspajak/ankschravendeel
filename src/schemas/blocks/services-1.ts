import { reference, z } from "astro:content"

export const services1Schema = z
  .object({
    content: z.string(),
    services: reference("services").array(),
  })
  .partial()
  .strict()
