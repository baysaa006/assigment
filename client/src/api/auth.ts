import axios from "axios";
import { useQuery } from "react-query";

const baseUrl = process.env.REACT_APP_URL || "http://localhost:3000";

export const getNonce = async (address: string) => {
  try {
    const response = await axios.get(`${baseUrl}/nonce?address=${address}`);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const verifySignature = async (tempToken: string, signature: string) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tempToken}`,
      },
    };
    const response = await axios.post(
      `${baseUrl}/verify`,
      { signature },
      config
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};
