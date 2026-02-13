import { customEncrypt } from "@/app/components/SessionStorageSecurity";
import { EncryptJWT } from "jose";

export const getApi = async (url, params = {}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const token = sessionStorage.getItem("authToken");
  let fullUrl = `${baseUrl}/${url}`;

  // ✅ HANDLE QUERY PARAMS (THIS WAS MISSING)
  if (params && Object.keys(params).length > 0) {
    const encryptedData = await encrypt(params);
    fullUrl = `${fullUrl}?en_url=${encodeURIComponent(encryptedData)}`;
  }

  // ✅ HANDLE ID IN PATH (unchanged)
  else {
    const parts = fullUrl.split("/");
    const lastPart = parts[parts.length - 1];

    if (/^\d+$/.test(lastPart)) {
      const encryptedId = customEncrypt(lastPart);
      parts[parts.length - 1] = encodeURIComponent(encryptedId);
      fullUrl = parts.join("/");
    }
  }

  const headers = {
    "Content-Type": "application/json",
    "customer-id": "CUST001",
    Authorization: `${token}`,
  };

  try {
    const response = await fetch(fullUrl, {
      method: "GET",
      headers,
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.message || "Failed to fetch data");
    }

    return result;
  } catch (error) {
    console.error("Error in getApi:", error);
    throw error;
  }
};

// Encrypt object params using JOSE
const encrypt = async (payload) => {
  try {
    const secret = new TextEncoder().encode(
      process.env.NEXT_PUBLIC_ENCRYPTION_SECRET,
    );
    return await new EncryptJWT(payload)
      .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
      .encrypt(secret);
  } catch (error) {
    console.error("Encryption error:", error);
    return null;
  }
};
