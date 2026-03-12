export async function uploadToCloudinary(file: File) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!cloudName) {
        throw new Error("Cloudinary cloud name não configurado.");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "portfolio_upload");
    formData.append("folder", "portfolio");

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await res.json();

    if (!res.ok) {
        console.error("Cloudinary response:", data);
        throw new Error(data?.error?.message || "Erro ao enviar imagem para o Cloudinary");
    }

    return data.secure_url;
}