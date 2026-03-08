import { ProjectPreviewCard } from "./project-preview-card"
import { ProjectFormData } from "./validation"

interface Props {
    values: ProjectFormData
    previewImage?: string
}

export default function ProjectPreview({ values, previewImage }: Props) {

    return (
        <aside className="space-y-4">

            <div>
                <h2 className="text-lg font-semibold">
                    Prévia
                </h2>
                <p className="text-sm text-gray-500">
                    Atualiza automaticamente.
                </p>
            </div>

            <div className="sticky top-6">

                <ProjectPreviewCard
                    project={{
                        title: values.title || "Fintech Dashboard",

                        image:
                            previewImage ||
                            values.image ||
                            "https://images.unsplash.com/photo-1551288049-bbda4864214c?q=80&w=800",

                        description:
                            values.description ||
                            "Plataforma de gestão financeira com visualização de dados em tempo real.",

                        stack:
                            values.stack?.length
                                ? values.stack
                                : ["React", "TypeScript"],

                        techHighlight:
                            values.techHighlight ||
                            "Gráficos interativos utilizando Recharts.",

                        githubUrl: values.githubUrl || "#",
                        demoUrl: values.demoUrl || "#"
                    }}
                />

            </div>

        </aside>
    )
}