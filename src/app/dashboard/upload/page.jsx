"use client";
import { postFormData } from "@/utils/postFormApiMethod";
import { useState } from "react";

const Upload = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => setFiles(e.target.files);

    const handleUpload = async () => {
        if (files.length === 0) {
            alert("Please select at least one file");
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }

        setLoading(true);
        try {
            const blob = await postFormData("/vehicles/upload-resumes", formData);

            // Trigger download
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "resumes.xlsx");
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

        } catch (err) {
            console.error(err);
            alert("Upload failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Upload</h2>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? "Processing..." : "Upload & Generate Excel"}
            </button>
        </div>
    );
};

export default Upload;
