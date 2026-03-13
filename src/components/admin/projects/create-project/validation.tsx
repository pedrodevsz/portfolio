import { z } from "zod"

export const projectSchema = z.object({
    title: z.string().min(3, "Título deve ter pelo menos 3 caracteres").max(100, "Título deve ter no máximo 100 caracteres"),

    image: z.string().optional(),

    description: z.string().min(10, "Descrição muito curta").max(500, "Descrição muito longa"),

    stack: z.array(z.string()),

    techHighlight: z.string().min(5, "Destaque técnico muito curto").max(130, "Destaque técnico muito longo"),

    githubUrl: z.string().url("URL inválida").or(z.literal("#")),

    demoUrl: z
        .string()
        .url("URL inválida")
        .or(z.literal(""))
        .or(z.literal("#"))
        .optional(),
})

export type ProjectFormData = z.infer<typeof projectSchema>