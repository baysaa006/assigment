import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/home/index";
import { ReactNode, useContext } from "react";
import Admin from "pages/admin/index";
import Settings from "pages/settings/index";
import authStore from "contexts/store";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/admin" element={<RequireAuth element={<Admin />} />} />
      <Route
        path="/settings"
        element={<RequireAuth element={<Settings />} />}
      />
    </Routes>
  );
};

export default App;

export const RequireAuth = ({ element }: { element: ReactNode }) => {
  const auth = authStore();

  if (!auth.logged) return <Navigate to="/" />;

  return <>{element}</>;
};
