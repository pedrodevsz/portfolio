"use client";
import React from 'react';
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaTiktok
} from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { IconType } from 'react-icons';

interface SocialLink {
    name: string;
    icon: IconType;
    url: string;
    color: string;
    label: string;
}

const socialLinks: SocialLink[] = [
    {
        name: 'LinkedIn',
        icon: FaLinkedin,
        url: 'https://linkedin.com/in/seu-usuario',
        color: 'hover:text-[#0077B5]',
        label: 'Conectar profissionalmente'
    },
    {
        name: 'GitHub',
        icon: FaGithub,
        url: 'https://github.com/seu-usuario',
        color: 'hover:text-[#333]',
        label: 'Ver meus projetos'
    },
    {
        name: 'Gmail',
        icon: IoMail,
        url: 'mailto:seuemail@gmail.com',
        color: 'hover:text-[#EA4335]',
        label: 'Enviar um e-mail'
    },
    {
        name: 'Instagram',
        icon: FaInstagram,
        url: 'https://instagram.com/seu-usuario',
        color: 'hover:text-[#E4405F]',
        label: 'Acompanhar o dia a dia'
    },
    {
        name: 'TikTok',
        icon: FaTiktok,
        url: 'https://tiktok.com/@seu-usuario',
        color: 'hover:text-[#000000]',
        label: 'Dicas de programação'
    },
];

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
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center group transition-all duration-300 ${social.color}`}
                            title={social.label}
                        >
                            <div className="p-5 rounded-2xl bg-white shadow-sm group-hover:shadow-orange-100 group-hover:shadow-2xl transition-all duration-500 border border-slate-100 mb-3 text-slate-500 group-hover:text-inherit">
                                {/* Agora passamos o size sem erro de tipagem */}
                                <Icon size={32} />
                            </div>
                            <span className="text-[10px] font-black text-slate-400 group-hover:text-slate-900 uppercase tracking-[0.2em] transition-colors">
                                {social.name}
                            </span>
                        </a>
                    );
                })}
            </div>

            <div className="mt-20">
                <a
                    href="mailto:seuemail@gmail.com"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-orange-600 shadow-xl hover:-translate-y-1"
                >
                    Me chame para um projeto
                </a>
            </div>
        </section>
    );
}