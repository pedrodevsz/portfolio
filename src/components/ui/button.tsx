import { cn } from "@/lib/cn"
import { ButtonHTMLAttributes } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
}

export function Button({
    variant = "primary",
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:pointer-events-none disabled:opacity-50",
                {
                    primary:
                        "bg-primary text-white hover:bg-primaryHover",

                    secondary:
                        "bg-surface text-text-primary border border-gray-200 hover:bg-gray-50",

                    ghost:
                        "bg-transparent text-primary hover:bg-primary/10",
                }[variant],
                className
            )}
            {...props}
        />
    )
}
