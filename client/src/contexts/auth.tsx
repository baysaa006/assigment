import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./auth.context";

const RequireAuth = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return isAuthenticated ? (
    <Navigate to="/admin" state={{ from: location }} replace />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
