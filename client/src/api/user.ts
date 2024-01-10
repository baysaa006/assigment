import { UserInput } from "@common/interfaces/users.interface";
import { api } from "providers";

export const checkUser = async (name: string, token: string) => {
  const response = await api.get(`/users/check?name=${name}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getUser = async (token: string) => {
  const response = await api.get(`/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateUser = async (body: UserInput, tempToken: string) => {
  try {
    const response = await api.post(
      `/users`,
      { body },
      { headers: { Authorization: `Bearer ${tempToken}` } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
