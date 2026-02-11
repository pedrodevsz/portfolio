"use client"
import { motion } from "framer-motion";
import { DiJava } from "react-icons/di";
import { SiAmazon, SiJavascript, SiPostgresql, SiReact, SiSpringboot, SiTailwindcss } from "react-icons/si";

// 1. Configuração da animação do container (Pai)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Tempo de espera entre cada item (o efeito cascata)
        },
    },
};

// 2. Configuração da animação de cada item (Filho)
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    },
};

function Skill({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
    return (
        <motion.div
            variants={itemVariants} // O item herda o estado do pai
            className="group flex flex-col items-center justify-center p-4 rounded-xl 
                        bg-white border border-slate-100 shadow-sm 
                        transition-all duration-300 hover:shadow-md hover:-translate-y-2 
                        hover:border-orange-200 w-20 h-20 md:w-30 md:h-30 cursor-default"
        >
            <Icon className="h-5 w-8 md:h-10 md:w-10 text-slate-600 
                            group-hover:text-orange-500 transition-colors duration-300" />

            <span className="mt-2 text-xs md:text-sm font-medium text-slate-500 
                             group-hover:text-slate-900 transition-colors duration-300">
                {label}
            </span>
        </motion.div>
    )
}

export function IconsSkills() {
    return (
        <motion.nav
            variants={containerVariants}
            initial="hidden"     // Começa invisível
            whileInView="visible" // Ativa a animação quando o usuário rolar até aqui
            viewport={{ once: true }} // Anima apenas uma vez
            className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:flex md:flex-wrap md:justify-start"
        >
            <Skill icon={SiJavascript} label="JavaScript" />
            <Skill icon={DiJava} label="Java" />
            <Skill icon={SiSpringboot} label="Spring" />
            <Skill icon={SiReact} label="React" />
            <Skill icon={SiPostgresql} label="Postgres" />
            <Skill icon={SiAmazon} label="AWS" />
        </motion.nav>
    )
}