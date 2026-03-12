export async function uploadToCloudinary(file: File) {

    const formData = new FormData()

    formData.append("file", file)
    formData.append("upload_preset", "portfolio_upload")
    formData.append("folder", "portfolio")

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
            method: "POST",
            body: formData
        }
    )

    const data = await res.json()

    console.log("Cloudinary response:", data)

    if (!res.ok) {
        throw new Error(data.error?.message || "Erro ao enviar imagem")
    }

    return data.secure_url
}