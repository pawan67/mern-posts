import axios from "axios";

export const registerUser = async ({ email, password, pic, name }) => {
  const response = await axios.post(
    `/api/users`,
    {
      email,
      password,
      pic,
      name,
    }
  );
  return response.data;
};
export const loginUser = async ({ email, password }) => {
  const response = await axios.post(
    `/api/users/login`,
    {
      email,
      password,
    }
  );
  return response.data;
};

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};

export const logoutUser = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
};
