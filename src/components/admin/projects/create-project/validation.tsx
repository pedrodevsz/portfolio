import { z } from "zod"

export const projectSchema = z.object({
    title: z.string().min(3, "Título deve ter pelo menos 3 caracteres"),

    image: z.string().optional(),

    description: z.string().min(10, "Descrição muito curta"),

    stack: z.array(z.string()),

    techHighlight: z.string().min(5, "Destaque técnico muito curto"),

    githubUrl: z.string().url("URL inválida").or(z.literal("#")),

    demoUrl: z
        .string()
        .url("URL inválida")
        .or(z.literal(""))
        .or(z.literal("#"))
        .optional(),
})

export type ProjectFormData = z.infer<typeof projectSchema>