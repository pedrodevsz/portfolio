import { Project } from "@/components/admin/projects/list-all-projects"

export const projectService = {
    async getAll(): Promise<Project[]> {
        const res = await fetch("/api/projects")
        if (!res.ok) throw new Error("Erro ao buscar projetos")
        return res.json()
    },

    async delete(id: string): Promise<void> {
        const res = await fetch(`/api/projects/${id}`, { method: "DELETE" })
        if (!res.ok) throw new Error("Erro ao deletar projeto")
    }
}