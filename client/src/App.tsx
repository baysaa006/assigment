import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import Home from "pages/home/home";
import Auth from "layouts/auth";
import { useContext } from "react";
import { AuthContext } from "contexts/auth.context";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {isAuthenticated && (
        <Route path="admin/*" element={<AdminLayout />}></Route>
      )}

      {isAuthenticated && (
        <Route path="/" element={<Navigate to="/admin" replace />} />
      )}

      {!isAuthenticated && <Route path="/" element={<Home />} />}
      {!isAuthenticated && <Route path="auth/*" element={<Auth />} />}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
