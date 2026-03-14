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
export const socialLinks: SocialLink[] = [
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