import { z, defineCollection } from "astro:content";

const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    description: z.string(),
    company: z.string(),
    url: z.string(),
    team: z.string(),
    time: z.string(),
    role: z.string(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    urlLink: z.string(),
    ghLink: z.string(),
    stack: z.array(z.string()),
    image: z.string(),
  }),
});

export const collections = {
  work: workCollection,
  project: projectCollection,
};
