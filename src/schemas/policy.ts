import { z } from "zod"

export const policySchema = z
  .object({
    title: z.string(),
  })
  .partial()
  .strict()

export type PolicySchema = z.infer<typeof policySchema>
