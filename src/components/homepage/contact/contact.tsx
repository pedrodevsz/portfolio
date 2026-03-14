"use client";
import Link from "next/link";
import { socialLinks } from "./social-links";

export function Contacts() {
    return (
        <section className="py-6 flex flex-col items-center w-full">
            <div className="text-center md:mb-20 mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">
                    Vamos <span className="text-orange-500">conversar?</span>
                </h2>
                <p className="text-slate-500 mt-2">Estou aberto a novas oportunidades e parcerias.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 px-6">
                {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center group transition-all duration-300 ${social.color}`}
                            title={social.label}
                        >
                            <div className="p-5 rounded-2xl bg-white shadow-sm group-hover:shadow-orange-100 group-hover:shadow-2xl transition-all duration-500 border border-slate-100 mb-3 text-slate-500 group-hover:text-inherit">
                                <Icon size={32} />
                            </div>
                            <span className="text-[10px] font-black text-slate-400 group-hover:text-slate-900 uppercase tracking-[0.2em] transition-colors">
                                {social.name}
                            </span>
                        </Link>
                    );
                })}
            </div>

            <div className="mt-20">
                <Link
                    href="mailto:pedrodevs25@gmail.com"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-orange-600 shadow-xl hover:-translate-y-1"
                >
                    Me chame para um projeto
                </Link>
            </div>
        </section>
    );
}