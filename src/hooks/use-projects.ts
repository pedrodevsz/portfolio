import { useState, useEffect } from "react"
import { projectService } from "@/lib/services/project-service"
import { Project } from "@/components/admin/projects/list-all-projects"

export function useProjects() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [deletingId, setDeletingId] = useState<string | null>(null)

    const fetchProjects = async () => {
        try {
            const data = await projectService.getAll()
            setProjects(data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const deleteProject = async (id: string) => {
        if (!confirm("Tem certeza que deseja remover este projeto?")) return

        setDeletingId(id)
        try {
            await projectService.delete(id)
            setProjects((prev) => prev.filter((p) => p._id !== id))
        } catch (error) {
            alert("Não foi possível excluir o projeto.")
        } finally {
            setDeletingId(null)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return { projects, loading, deletingId, deleteProject, refresh: fetchProjects }
}