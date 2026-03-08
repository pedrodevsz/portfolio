export const dynamic = "force-dynamic";

import { getProjects } from "@/lib/mongodb/get-projects"
import { ProjectsGrid } from "./projects-grid"

export async function MyProjects() {
    const projects = await getProjects()

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">

            <div className="mb-10 md:text-left">
                <h2 className="text-4xl text-center md:text-5xl font-extrabold text-slate-900 tracking-tighter">
                    Meus{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                        Projetos
                    </span>
                </h2>
            </div>

            <ProjectsGrid projects={projects} />

        </section>
    )
}