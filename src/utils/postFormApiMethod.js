export const postFormData = async (url, formData) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "");
    const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

    try {
        const response = await fetch(fullUrl, {
            method: "POST",
            body: formData, // send FormData directly
            // Do NOT set Content-Type manually! Browser sets the correct boundary
        });

        // Return the blob directly for Excel download
        if (!response.ok) throw new Error("Upload failed");

        return await response.blob();
    } catch (error) {
        throw new Error(error.message || "Network error");
    }
};
