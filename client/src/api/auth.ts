import axios from "axios";
import { api } from "providers";

export const getNonce = async (address: string) => {
  const response = await api.get(`nonce?address=${address}`);
  return response.data;
};

export const verifySignature = async (signature: string, tempToken: string) => {
  try {
    const response = await api.post(
      `/verify`,
      { signature },
      { headers: { Authorization: `Bearer ${tempToken}` } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const checkSignature = async (address: string) => {
  const response = await api.get(`check?address=${address}`);
  return response.data;
};
