import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      draft: z.boolean().default(false),
    }),
});

const gallery = defineCollection({
  loader: file("./src/content/gallery/entries.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      pubDate: z.coerce.date(),
    }),
});

export const collections = { blog, gallery };
