"use client"

import { Project } from "../types"
import { ProjectCard } from "./project-card"
import { motion } from "framer-motion"

interface ProjectsGridProps {
    projects: Project[]
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
            {projects.map((proj: any) => (
                <ProjectCard key={proj._id} project={proj} />
            ))}
        </motion.div>
    )
}