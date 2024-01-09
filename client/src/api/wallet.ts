import axios from "axios";
import { useQuery } from "react-query";

const baseUrl = process.env.REACT_APP_URL || "http://localhost:3000";

export const getWallet = async (id: string) => {
  const response = await axios.get(`${baseUrl}/wallet/${id}`);
  return response.data;
};

export const useWallet = (address: string) => {
  return useQuery(["getWallet", address], () => getWallet(address), {
    enabled: false,
    retry: false,
  });
};
