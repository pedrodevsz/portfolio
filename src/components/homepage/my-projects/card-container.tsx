"use client"
import { ProjectCard } from "./project-card";
import { motion } from "framer-motion"
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export function MyProjects() {
    const projects = [
        {
            title: "E-commerce API",
            image: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=800&auto=format&fit=crop",
            description: "API robusta desenvolvida para suportar milhares de acessos simultâneos com arquitetura de microsserviços.",
            stack: ["Java", "Spring Boot", "PostgreSQL"],
            techHighlight: "Implementação de cache com Redis para performance.",
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            title: "Fintech Dashboard",
            image: "https://images.unsplash.com/photo-1551288049-bbda4864214c?q=80&w=800&auto=format&fit=crop",
            description: "Plataforma de gestão financeira com visualização de dados em tempo real e relatórios complexos.",
            stack: ["React", "TypeScript", "Tailwind"],
            techHighlight: "Gráficos interativos utilizando Recharts e processamento de dados via Web Workers.",
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            title: "Social Media App",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
            description: "Aplicação full-stack com feed em tempo real, sistema de notificações e chat integrado.",
            stack: ["Next.js", "Node.js", "Socket.io"],
            techHighlight: "Comunicação bidirecional via WebSockets e armazenamento no MongoDB.",
            githubUrl: "#",
            demoUrl: "#"
        },
        {
            title: "AI Image Generator",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
            description: "Interface para geração de imagens via IA integrada com APIs de modelos de difusão.",
            stack: ["Python", "FastAPI", "React"],
            techHighlight: "Gerenciamento de filas de processamento assíncrono com Celery.",
            githubUrl: "#",
            demoUrl: "#"
        }
    ];

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-10 md:text-left">
                <h2 className="text-4xl text-center md:text-5xl font-extrabold text-slate-900 tracking-tighter">
                    Meus <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Projetos</span>
                </h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {projects.map((proj, index) => (
                    <ProjectCard key={index} project={proj} />
                ))}
            </motion.div>
        </section>
    );
}