import { AboutMe } from "./about-me/about-me";
import { Contacts } from "./contact/contact";
import { MyProjects } from "./my-projects/card-container";
import { IconsSkills } from "./nav-skills";

export function Dashboard() {
    return (
        <main className="max-w-7xl mx-auto px-6 space-y-10 md:space-y-20 py-4">

            <section className="flex flex-col items-center text-center">
                <h1 className="mb-8 font-extrabold text-4xl md:text-6xl tracking-tight text-slate-900 leading-tight">
                    Bem-vindo ao meu <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                        portfólio
                    </span>
                </h1>

                <IconsSkills />
            </section>

            <MyProjects />
            <AboutMe />
            <Contacts />

        </main>
    )
}