"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ProjectFormData, projectSchema } from "./validation"
import ProjectForm from "./project-form"
import ProjectPreview from "./project-preview"
import { useState } from "react"
import { uploadToCloudinary } from "@/lib/upload-cloudinary"

export default function CreateProject() {

    const [imageFile, setImageFile] = useState<File | null>(null)

    const form = useForm<ProjectFormData>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: "",
            image: "",
            description: "",
            stack: [],
            techHighlight: "",
            githubUrl: "",
            demoUrl: ""
        }
    })

    const { handleSubmit, watch } = form
    const values = watch()

    const previewImage = imageFile
        ? URL.createObjectURL(imageFile)
        : values.image

    const onSubmit = async (values: ProjectFormData) => {

        let imageUrl = values.image

        if (imageFile) {
            imageUrl = await uploadToCloudinary(imageFile)
        }

        const res = await fetch("/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...values,
                image: imageUrl
            })
        })

        const data = await res.json()

        console.log("Projeto salvo:", data)
    }

    return (
        <main className="max-w-6xl mx-auto p-4">

            <div className="grid lg:grid-cols-2 gap-8">

                <ProjectForm
                    form={form}
                    onSubmit={handleSubmit(onSubmit)}
                    setImageFile={setImageFile}
                />

                <ProjectPreview
                    values={values}
                    previewImage={previewImage}
                />

            </div>

        </main>
    )
}