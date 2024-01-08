import React from "react";

// Admin Imports

// Auth Imports
import Login from "pages/auth/login";
import Register from "pages/auth/register";

// Icon Imports
import { MdHome, MdLock } from "react-icons/md";

const routes = [
  {
    name: "Login",
    layout: "/auth",
    path: "login",
    icon: <MdLock className="h-6 w-6" />,
    component: <Login />,
  },
  {
    name: "Login",
    layout: "/auth",
    path: "register",
    icon: <MdLock className="h-6 w-6" />,
    component: <Register />,
  },
];

export default routes;
