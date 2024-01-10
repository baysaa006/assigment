import axios from "axios";

const baseUrl = process.env.REACT_APP_URL || "http://localhost:3000";

export const getWallet = async (id: string) => {
  const response = await axios.get(`${baseUrl}/wallet/${id}`);
  return response.data;
};
