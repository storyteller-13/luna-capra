import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const poems = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/poems',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
  }),
});

export const collections = { poems };
