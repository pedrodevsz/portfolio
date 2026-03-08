import { z } from "zod"

export const projectSchema = z.object({
    title: z.string().min(3),
    image: z.string().optional(),
    description: z.string().min(10),
    stack: z.array(z.string()),
    techHighlight: z.string().min(5),
    githubUrl: z.string().url().or(z.literal("#")),
    demoUrl: z.string().url().or(z.literal("#")),
})

export type ProjectFormData = z.infer<typeof projectSchema>