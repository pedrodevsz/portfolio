"use client"
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { Project } from "@/lib/types/project/types";
import Link from "next/link";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            variants={itemVariants}
            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden 
            shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-130"
        >
            <div className="relative overflow-hidden h-48 bg-slate-100">
                <Image
                    fill
                    src={project.image || "/placeholder-project.png"}
                    alt={project.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-5 flex flex-col flex-1">

                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2 min-h-14">
                    {project.title}
                </h3>

                <p className="text-slate-600 text-sm line-clamp-3 min-h-15 mb-4">
                    {project.description}
                </p>

                <div className="mb-4 p-2 bg-orange-50 rounded-lg border-l-4 border-orange-400 min-h-18">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider block">
                        Destaque Técnico:
                    </span>

                    <span className="text-sm text-orange-900 line-clamp-2">
                        {project.techHighlight}
                    </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4 min-h-11">
                    {project.stack.slice(0, 5).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-[10px] font-semibold bg-slate-100 text-slate-500 rounded-md uppercase"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-black transition-colors"
                    >
                        <FiGithub /> GitHub
                    </Link>

                    <TooltipProvider>
                        {project.demoUrl ? (
                            <Link
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors"
                            >
                                Live Demo <FiExternalLink />
                            </Link>
                        ) : (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="flex items-center gap-2 text-sm font-bold text-slate-400 cursor-not-allowed">
                                        Live Demo <FiExternalLink />
                                    </span>
                                </TooltipTrigger>

                                <TooltipContent>
                                    <p>Demo ainda não disponível 🚧</p>
                                </TooltipContent>
                            </Tooltip>
                        )}
                    </TooltipProvider>
                </div>
            </div>
        </motion.div>
    );
}