import axios from "axios";

export const getUsers = async () => {
  const response = {
    status: 200,
    data: {},
    error: "",
  };
  axios
    .get("http://localhost:3000/users")
    .then((res) => {
      response.data = res.data;
      response.status = 200;
    })
    .catch((err) => (response.error = err));

  return response;
};

export const getUser = async (id: string) => {
  const response = {
    status: 200,
    data: {},
    error: "",
  };
  axios
    .get(`http://localhost:3000/users`)
    .then((res) => {
      response.data = res.data;
      response.status = 200;
    })
    .catch((err) => console.log(err));

  return response;
};
