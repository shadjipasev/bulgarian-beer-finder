import { request } from "../utils/request";

const baseUrl = "http://localhost:3030/auth";

export const authLogin = async (username, password) => {
  try {
    const result = await request("POST", baseUrl + "/login", {
      username,
      password,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const authRegister = async (data) => {
  try {
    const result = await request("POST", baseUrl + "/register", {
      username,
      email,
      password,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};
