import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    date: z.string(),
    location: z.string(),
    order: z.number(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tech: z.array(z.string()),
    link: z.string().optional(),
    order: z.number(),
    image: z.string().optional(),
  }),
});

export const collections = { experience, projects };
