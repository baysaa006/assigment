import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import AuthProvider from "contexts/auth.context";
import { ChakraProvider } from "@chakra-ui/react";
import { AxiosProvider, axiosConfig } from "providers";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <AxiosProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </AxiosProvider>
  </ChakraProvider>
);
