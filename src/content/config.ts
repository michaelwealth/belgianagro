import { defineCollection, z } from 'astro:content';

const companies = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    description: z.string(),
    products: z.array(z.string()),
    website: z.string().optional(),
    order: z.number().default(0),
  }),
});

const faqs = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
    order: z.number().default(0),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    venue: z.string(),
    venueDetail: z.string(),
    type: z.enum(['pavilion', 'matchmaking']),
    cta: z.string().optional(),
    ctaLink: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { companies, faqs, events };
