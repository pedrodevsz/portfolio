"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AdminLoginModal() {
    const [open, setOpen] = useState(true)
    const [code, setCode] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()

        setLoading(true)

        const res = await fetch("/api/admin/login", {
            method: "POST",
            body: JSON.stringify({ code }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (res.ok) {
            router.push("/admin")
            router.refresh()
        } else {
            alert("Código inválido")
        }

        setLoading(false)
    }

    return (
        <Dialog open={open}>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Painel Admin</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleLogin} className="space-y-4">

                    <Input
                        placeholder="Digite o código"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        type="password"
                    />

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={loading}
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </Button>

                </form>
            </DialogContent>
        </Dialog>
    )
}