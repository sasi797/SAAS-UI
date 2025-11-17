export const deleteApi = async (url) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, ""); // strip trailing /
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`; // ✅ don't add extra slash

  try {
    const response = await fetch(fullUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `${token}`,
      },
    });

    const result = await response.json();

    if (response.ok) {
      // Return the successful result (with JWT and user details)
      return result;
    } else {
      // Throw an error with the message from the response
      // throw new Error(result.error?.message || "Something went wrong");
      throw new Error(result?.message || "Failed to fetch data");
    }
  } catch (error) {
    console.error("Error in deleteApi:", error);
    throw error;
  }
};
