import axios from "axios";

export const getUsers = async () => {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  return data;
};

export const getUser = async (id: string) => {
  const response = await axios.get(`http://localhost:3000/users/${id}`);
  return response;
};
