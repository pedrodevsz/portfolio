import { UseFormReturn } from "react-hook-form"
import { ProjectFormData } from "./validation"
import FormField from "@/components/ui/form-field"
import StackInput from "./stack-input"
import ImageUpload from "./image-upload"

interface Props {
    form: UseFormReturn<ProjectFormData>
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
    setImageFile: (file: File | null) => void
}

export default function ProjectForm({ form, onSubmit, setImageFile }: Props) {

    const { register, formState: { errors } } = form

    return (
        <form
            onSubmit={onSubmit}
            className="space-y-6 bg-white border rounded-xl p-6 shadow-sm"
        >

            <header>
                <h1 className="text-lg font-semibold">Criar Projeto</h1>
                <p className="text-sm text-gray-500">
                    Edite e visualize em tempo real.
                </p>
            </header>

            <FormField
                label="Título"
                error={errors.title?.message}
            >
                <input
                    {...register("title")}
                    className="input"
                />
            </FormField>

            <FormField
                label="Imagem"
                error={errors.image?.message}
            >
                <ImageUpload onChange={setImageFile} />
            </FormField>

            <FormField
                label="Descrição"
                error={errors.description?.message}
            >
                <textarea
                    {...register("description")}
                    className="textarea"
                />
            </FormField>

            <FormField
                label="Destaque Técnico"
                error={errors.techHighlight?.message}
            >
                <textarea
                    {...register("techHighlight")}
                    className="textarea-sm"
                />
            </FormField>

            <StackInput form={form} />

            <div className="grid grid-cols-2 gap-4">

                <FormField label="GitHub">
                    <input {...register("githubUrl")} className="input" />
                </FormField>

                <FormField label="Demo">
                    <input {...register("demoUrl")} className="input" />
                </FormField>

            </div>

            <button
                type="submit"
                className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-900 transition"
            >
                Salvar Projeto
            </button>

        </form>
    )
}