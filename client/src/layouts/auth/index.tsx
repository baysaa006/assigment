import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes";
import { RoutesType } from "../../interfaces/index";

export default function Auth() {
  const getRoutes = (routes: RoutesType[]): any => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className="flex h-screen w-full items-center justify-center dark:!bg-navy-900">
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </div>
  );
}
