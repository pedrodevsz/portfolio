import { getProjects } from "@/lib/mongodb/get-projects"
import { ProjectsGrid } from "./projects-grid"
import { Project } from "../types";

export const dynamic = "force-dynamic";

export async function MyProjects() {

    let projects: Project[] = []

    try {
        projects = await getProjects()
    } catch (err) {
        console.error(err)
    }

    return (
        <section className="py-16 px-6 max-w-7xl mx-auto">

            <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                    Meus{" "}
                    <span className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        Projetos
                    </span>
                </h2>
            </div>

            <ProjectsGrid projects={projects ?? []} />

        </section>
    )
}