import { ListAllProjects } from "@/components/admin/projects/list-all-projects";
import { Header } from "@/components/header/header";

export default function MyProjects() {
    return (
        <>
            <Header />
            <main className="p-8">
                <ListAllProjects />
            </main>

        </>
    )
}