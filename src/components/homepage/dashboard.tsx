import { AboutMe } from "./about-me/about-me";
import { Contacts } from "./contact/contact";
import { MyProjects } from "./my-projects/my-projects";
import { IconsSkills } from "./nav-skills";

export function Dashboard() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">

            <section className="flex flex-col items-center text-center">

                <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight text-slate-900 leading-tight">
                    Bem-vindo ao meu{" "}
                    <br className="hidden md:block" />
                    <span className="bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        portfólio
                    </span>
                </h1>

                <p className="mt-6 text-slate-500 max-w-xl">
                    Desenvolvedor focado em aplicações modernas com
                    Next.js, Spring Boot e bancos de dados escaláveis.
                </p>

                <div className="mt-10">
                    <IconsSkills />
                </div>

            </section>

            <MyProjects />

            <AboutMe />

            <Contacts />

        </main>
    )
}