import { getProjects } from "@/lib/mongodb/get-projects"
import { Project } from "../../../lib/types/project/types";
import { ProjectsCarousel } from "./project-carousel-";

export const dynamic = "force-dynamic";

export async function MyProjects() {

    let projects: Project[] = []

    try {
        projects = await getProjects()
    } catch (err) {
        console.error(err)
    }

    return (
        <section className="py-6 px-6 max-w-7xl mx-auto">

            <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                    Meus{" "}
                    <span className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        Projetos
                    </span>
                </h2>
            </div>

            {projects.length === 0 ? (
                <div className="py-2 flex justify-center">
                    <div className="w-full max-w-xl border-2 border-dashed border-orange-500 bg-slate-100 rounded-xl p-10 text-center">

                        <p className="text-slate-400 text-lg italic leading-relaxed">
                            Nenhum projeto disponível.
                            <br />
                            Devo estar trabalhando em algo muito especial!!!
                        </p>

                    </div>
                </div>
            ) : (
                <ProjectsCarousel projects={projects} />
            )}

        </section>
    )
}