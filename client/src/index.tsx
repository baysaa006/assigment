import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AxiosProvider, axiosConfig } from "providers";
import Navbar from "components/navbar";
import { Layout } from "components/layouts";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <AxiosProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <Layout>
                <App />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AxiosProvider>
  </ChakraProvider>
);
