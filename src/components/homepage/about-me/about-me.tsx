"use client";
import { useState } from 'react';

interface TimelineEvent {
    year: string;
    text: string;
}

const events: TimelineEvent[] = [
    { year: "2021", text: "Lógica de Programação e algoritmos com Java Script" },
    { year: "2022", text: "HTML, CSS puro, primeiras códigos com React e Introdução ao postgreSql" },
    { year: "2023 1 sem", text: "Next.js, Talwind CSS e Java Básico" },
    { year: "2023 2 sem", text: "Type Script, Testes em Next e Faculdade eng de software" },
    { year: "2024 1 sem", text: "Spring boot e melhores práticas para desenvolvimento web, PostgreSql avançado" },
    { year: "2024 2 sem", text: "Shadcn ui, Spring boot e MongoDB" },
    { year: "2025 1 sem", text: "Projetos reais com Next e Spring, Docker e Primeiro serviço remunerado" },
];
export function AboutMe() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="flex flex-col items-center w-full py-6">
            <div className="text-center mb-12 md:mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">
                    Minha <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">Jornada</span>
                </h2>
                <p className="text-slate-500 mt-4 font-medium italic">Passe o mouse nas datas para ver os detalhes</p>
            </div>

            <div className="flex flex-wrap justify-center gap-y-10 md:gap-y-24 gap-x-4 md:gap-x-12 max-w-6xl mx-auto relative px-4">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`relative flex items-center transition-all duration-500 ${index % 2 === 0 ? "md:-translate-y-6" : "md:translate-y-6"
                            }`}
                    >
                        {index !== events.length - 1 && (
                            <div className="absolute left-full w-12 md:w-24 h-0.5 bg-slate-200 -z-10 hidden lg:block"
                                style={{
                                    transform: `rotate(${index % 2 === 0 ? '25deg' : '-25deg'})`,
                                    transformOrigin: 'left'
                                }}
                            />
                        )}

                        <div
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-orange-500 flex items-center justify-center 
                                     text-white text-xs md:text-sm font-bold cursor-default border-4 border-white shadow-xl
                                     hover:bg-orange-600 hover:scale-110 transition-all duration-300 relative text-center px-2"
                        >
                            {event.year}

                            <div className={`absolute bottom-full mb-4 w-48 p-4 bg-slate-900 text-white text-xs rounded-xl 
                                           shadow-2xl transition-all duration-300 pointer-events-none z-30 
                                           ${hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                                {event.text}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}