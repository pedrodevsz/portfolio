"use client"

import { UseFormReturn } from "react-hook-form"
import { ProjectFormData } from "./validation"
import { useState } from "react"

const defaultTechs: string[] = []

export default function StackInput({ form }: { form: UseFormReturn<ProjectFormData> }) {

    const { watch, setValue } = form
    const stack = watch("stack") || []

    const [techs, setTechs] = useState(defaultTechs)
    const [newTech, setNewTech] = useState("")

    function toggleTech(tech: string) {
        if (stack.includes(tech)) {
            setValue("stack", stack.filter(t => t !== tech))
        } else {
            setValue("stack", [...stack, tech])
        }
    }

    function addTech() {
        if (!newTech.trim()) return

        const formatted = newTech.trim()

        if (!techs.includes(formatted)) {
            setTechs([...techs, formatted])
        }

        if (!stack.includes(formatted)) {
            setValue("stack", [...stack, formatted])
        }

        setNewTech("")
    }

    return (
        <div className="space-y-4">

            <label className="text-sm font-medium text-gray-700">
                Tecnologias
            </label>

            {techs.length === 0 && (
                <div className="text-sm text-gray-500 border border-dashed border-gray-300 rounded-xl p-4 text-center bg-gray-50">
                    Nenhuma tecnologia adicionada ainda.
                    <br />
                    <span className="text-xs text-gray-400">
                        Adicione uma tecnologia abaixo.
                    </span>
                </div>
            )}

            {techs.length > 0 && (
                <div className="flex flex-wrap gap-3">

                    {techs.map((tech) => {

                        const active = stack.includes(tech)

                        return (
                            <button
                                key={tech}
                                type="button"
                                onClick={() => toggleTech(tech)}
                                className={`px-4 py-2 text-sm rounded-xl border transition-all duration-200 font-medium ${active ? "bg-black text-white border-black shadow-sm" : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300"}`}
                            >
                                {tech}
                            </button>
                        )

                    })}

                </div>
            )}

            <div className="flex gap-2">

                <input
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    placeholder="Adicionar tecnologia..."
                    className="input flex-1"
                />

                <button
                    type="button"
                    onClick={addTech}
                    className="px-4 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90 transition"
                >
                    Adicionar
                </button>

            </div>

        </div>
    )
}