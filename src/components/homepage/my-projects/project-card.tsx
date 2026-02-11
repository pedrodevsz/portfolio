import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi"; // npm install react-icons

interface ProjectProps {
    title: string;
    image: string;
    description: string;
    stack: string[];
    techHighlight: string;
    githubUrl: string;
    demoUrl: string;
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function ProjectCard({ project }: { project: ProjectProps }) {
    return (
        <motion.div
            variants={itemVariants}
            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
        >
            <div className="relative overflow-hidden h-48 bg-slate-100">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                </h3>

                <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {project.description}
                </p>

                {/* Destaque Técnico */}
                <div className="mb-4 p-2 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider block">Destaque Técnico:</span>
                    <span className="text-sm text-orange-900">{project.techHighlight}</span>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-[10px] font-semibold bg-slate-100 text-slate-500 rounded-md uppercase">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Ações - Empurra para o rodapé do card */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-black transition-colors"
                    >
                        <FiGithub /> GitHub
                    </a>
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        className="flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors"
                    >
                        Live Demo <FiExternalLink />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}