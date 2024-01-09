import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/home";
import { useContext } from "react";
import { AuthContext } from "contexts/auth.context";
import Admin from "pages/admin";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {isAuthenticated && <Route path="admin/*" element={<Admin />} />}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
