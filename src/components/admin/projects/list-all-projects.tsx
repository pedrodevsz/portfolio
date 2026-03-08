"use client"

import { RiLoader2Line, RiDeleteBin6Line, RiFolderOpenLine } from "react-icons/ri"
import { useProjects } from "@/hooks/use-projects"

export type Project = {
    _id: string
    title: string
    image?: string
    stack?: string[]
}

export function ListAllProjects() {
    const { projects, loading, deletingId, deleteProject } = useProjects()

    if (loading) return <LoadingSkeleton />
    if (projects.length === 0) return <EmptyState />

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {projects.map((project) => (
                <article
                    key={project._id}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-xl hover:-translate-y-1"
                >
                    <div className="aspect-video w-full overflow-hidden bg-gray-100">
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center text-gray-400">
                                <RiFolderOpenLine size={32} />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                            <button
                                onClick={() => deleteProject(project._id)}
                                disabled={deletingId === project._id}
                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors disabled:opacity-50"
                            >
                                {deletingId === project._id ? (
                                    <RiLoader2Line className="animate-spin" />
                                ) : (
                                    <RiDeleteBin6Line size={18} />
                                )}
                            </button>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {project.stack?.map((tech) => (
                                <span key={tech} className="inline-block rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

function LoadingSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
                <div key={n} className="h-48 w-full bg-gray-100 animate-pulse rounded-2xl" />
            ))}
        </div>
    )
}

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50/50">
            <RiFolderOpenLine className="text-gray-300 text-5xl mb-4" />
            <p className="text-gray-500 font-medium">Nenhum projeto encontrado.</p>
        </div>
    )
}