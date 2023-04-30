import axios from "axios";

const instance = axios.create({
  baseURL: "https://644d0d9f57f12a1d3dd6940c.mockapi.io/api/",
  //   baseURL: process.env.REACT_APP_API_URL,
});

export const fetchUsers = async () => {
  try {
    const { data } = await instance.get("users");
    return data;
  } catch (error) {
    console.log(error);
  }
};
