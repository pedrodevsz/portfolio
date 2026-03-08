"use client"

import { PlusIcon, ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Header() {

    const router = useRouter()

    return (
        <div className="p-4 mb-6 flex items-center justify-between rounded-lg bg-gray-100">

            <button
                onClick={() => {
                    if (window.history.length > 1) {
                        router.back()
                    } else {
                        router.push("/my-projects")
                    }
                }}
                className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors"
            >
                <ArrowLeftIcon size={18} />
                Voltar
            </button>

            <Link
                href="/create-project"
                className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors"
            >
                <PlusIcon size={18} />
                Criar projeto
            </Link>

        </div>
    )
}