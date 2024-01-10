import React, { createContext, useContext, ReactNode } from "react";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useToast } from "@chakra-ui/react";

interface AxiosContextProps {
  axiosInstance: AxiosInstance;
}

const AxiosContext = createContext<AxiosContextProps | undefined>(undefined);
export const axiosConfig = {
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
};

export const api = axios.create(axiosConfig);

export const AxiosProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const toast = useToast();
  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => {
      toast({
        status: "info",
        title: "Алдаа гарлаа",
        description: error.response.data.message,
        duration: 3000,
      });

      return Promise.reject(error);
    }
  );

  return (
    <AxiosContext.Provider value={{ axiosInstance: api }}>
      {children}
    </AxiosContext.Provider>
  );
};
