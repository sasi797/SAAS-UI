export const getApi = async (url) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, ""); // strip trailing /
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`; // ✅ don't add extra slash

  try {
    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (response.ok) return result;
    throw new Error(result?.message || "Failed to fetch data");
  } catch (error) {
    console.error("Error in getApi:", error);
    throw error;
  }
};
