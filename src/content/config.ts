import { z, defineCollection } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedDate: z.coerce.date(),
    isDraft: z.boolean().default(false)
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    isDraft: z.boolean().default(false)
  })
})

export const collections = {
  posts: postCollection,
  projects
}
