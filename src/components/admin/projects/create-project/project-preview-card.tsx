import { ProjectCard } from "@/components/homepage/my-projects/project-card"
import { Project } from "@/lib/types/project/types"


export function ProjectPreviewCard({ project }: { project: Project }) {

    if (!project.title) {
        return (
            <div className="border rounded-xl p-10 text-center text-gray-400">
                Preencha os dados para ver a prévia
            </div>
        )
    }

    return (
        <div className="max-w-md mx-auto">
            <ProjectCard project={project} />
        </div>
    )
}