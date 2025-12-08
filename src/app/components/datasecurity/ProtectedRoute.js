import { useEffect, useState } from "react";
import UnauthorizedPage from "./UnauthorizedPage";

export default function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    if (token) setIsAuth(true);
    else setIsAuth(false);
  }, []);

  if (isAuth === null) return null; // loading

  if (!isAuth) return <UnauthorizedPage />;

  return <>{children}</>;
}
