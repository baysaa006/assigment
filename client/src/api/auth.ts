import axios from "axios";
import { getAccessToken } from "contexts/auth.context";
import { api } from "providers";

export const getNonce = async (address: string) => {
  const response = await api.get(`nonce?address=${address}`);
  return response.data;
};

export const verifySignature = async (signature: string) => {
  try {
    const response = await api.post(
      `/verify`,
      { signature },
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
