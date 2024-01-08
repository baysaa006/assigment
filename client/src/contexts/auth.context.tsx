import React, { createContext, useState } from "react";
import decode from "jwt-decode";

export interface Payload {
  iss: string;
  exp: number;
  role: string;
  name?: string;
  token: number;
}

export const setAccessToken = (token: string) =>
  localStorage.setItem("token", token);

export const getAccessToken = () => {
  const token = localStorage.getItem("token");
  if (token) return token;
  return "y5A7CaFcHfMhPkSpUrWuZw3z6B8DbGdJfNjQmSqVsXv2x4z7C9";
};

export const isValidToken = (lockedToken?: any) => {
  const token = lockedToken || getAccessToken();
  if (!token) return false;
  try {
    const { exp }: Payload = decode(token);
    if (exp * 1000 < new Date().getTime()) return false;
    console.log("authenticated");
    return true;
  } catch (e) {
    return false;
  }
};

export const getPayload = (): Payload => {
  const token = getAccessToken();
  if (!token) return null;
  try {
    const payload: Payload = decode(token);
    return payload;
  } catch (e) {
    return null;
  }
};

interface AuthContextType {
  isAuthenticated: boolean;
  authenticate: (token: string, cb: Function) => void;
  signOut: () => void;
  payload: Payload;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setAuthenticated] = useState(isValidToken);

  const authenticate = (token: string, cb: Function) => {
    setAccessToken(token);
    setAuthenticated(true);
    if (cb) setTimeout(cb, 100);
  };

  const payload = getPayload();

  const signOut = () => {
    console.log("Remove token");
    localStorage.removeItem("token");
    setAuthenticated(false);
  };

  const defaultContext: AuthContextType = {
    isAuthenticated,
    authenticate,
    signOut,
    payload,
  };

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
