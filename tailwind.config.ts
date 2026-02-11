import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F9FAFB",
                surface: "#FFFFFF",

                primary: "#2563EB",
                primaryHover: "#1D4ED8",
                accent: "#22C55E",

                text: {
                    primary: "#111827",
                    secondary: "#4B5563",
                    muted: "#9CA3AF",
                },
            },
        },
    },
    plugins: [],
}

export default config
