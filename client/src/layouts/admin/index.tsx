import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Footer from "components/footer/Footer";
import routes from "routes";
import { RoutesType } from "../../interfaces/index";

export default function Admin(props: { [x: string]: any }) {
  const { ...rest } = props;
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = React.useState("Admin");

  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes: RoutesType[]): string | boolean => {
    let activeRoute = "admin";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes: RoutesType[]): string | boolean => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes: RoutesType[]): any => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="min-h-screen   w-full">
      <div className=" min-h-screen  w-full bg-lightPrimary dark:!bg-navy-900">
        <main className={`transition-all `}>
          <div>
            <Navbar
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s  min-h-[84vh] p-2 ">
              <Routes>
                {getRoutes(routes)}
                <Route
                  path="/"
                  element={<Navigate to="/admin/upload" replace />}
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
