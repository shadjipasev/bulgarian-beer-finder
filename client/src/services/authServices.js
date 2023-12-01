import { request } from "../utils/request";

const baseUrl = "http://localhost:3030/auth";

export const authLogin = async (data) => {
  try {
    console.log(data);

    const result = await request("POST", baseUrl + "/login", {
      username: data.username,
      password: data.password,
    });
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const authRegister = async (data) => {
  try {
    console.log(data);

    const result = await request("POST", baseUrl + "/register", {
      username: data.username,
      email: data.email,
      password: data.password,
    });

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
};
