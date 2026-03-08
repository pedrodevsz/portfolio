"use client"

import { useState } from "react"

interface Props {
    onChange: (file: File | null) => void
}

export default function ImageUpload({ onChange }: Props) {

    const [preview, setPreview] = useState<string | null>(null)

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {

        const file = e.target.files?.[0]

        if (!file) return

        onChange(file)

        const reader = new FileReader()

        reader.onloadend = () => {
            setPreview(reader.result as string)
        }

        reader.readAsDataURL(file)
    }

    return (
        <div className="space-y-3">

            <label className="flex flex-col items-center justify-center gap-2 border border-dashed border-gray-300 rounded-xl p-6 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">

                <span className="text-sm text-gray-600">
                    Clique ou arraste uma imagem
                </span>

                <span className="text-xs text-gray-400">
                    PNG, JPG ou WEBP
                </span>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                    className="hidden"
                />

            </label>

            {preview && (
                <div className="relative">

                    <img
                        src={preview}
                        className="rounded-xl h-48 w-full object-cover border border-gray-200 shadow-sm"
                    />

                </div>
            )}

        </div>
    )
}