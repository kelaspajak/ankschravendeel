import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import fs from "node:fs/promises";
import { parse, stringify } from "yaml";

export const server = {
  editPage: defineAction({
    input: z.object({
      id: z.string(),
      title: z.string().optional(),
      description: z.string().optional(),
    }),
    handler: async (input) => {
      const { id, title, description } = input;
      const filePath = `src/content/pages/${
        id === "index" ? "index.md" : `${id}.md`
      }`;
      const fileContent = await fs.readFile(filePath, "utf-8");

      const frontmatter = fileContent.match(/^---\n([\s\S]*?)\n---/);
      const frontmatterData = parse(frontmatter?.[1] || "");

      const updatedFrontmatterData = {
        ...frontmatterData,
        title: title || frontmatterData.title,
        description: description || frontmatterData.description,
      };

      const updatedFileContent = `---\n${stringify(
        updatedFrontmatterData
      )}\n---\n`;

      await fs.writeFile(filePath, updatedFileContent, "utf-8");
    },
  }),
  editBlock: defineAction({
    input: z.object({
      id: z.string(),
      target: z.string(),
      value: z.string(),
    }),
    handler: async ({ id, target, value }) => {
      const filePath = `src/blocks/${id}.tsx`;
      const fileContent = await fs.readFile(filePath, "utf-8");

      console.log({ id, target, value });

      const updatedFileContent = fileContent.replace(
        new RegExp(`>(.*?${target}.*?)<`, "g"),
        `>${value}<`
      );

      await fs.writeFile(filePath, updatedFileContent, "utf-8");
    },
  }),
};
