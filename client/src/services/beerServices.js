import { request } from "../utils/request";

const baseUrl = "http://localhost:3030/beer";

export const create = async (data) => {
  const result = await request("POST", baseUrl + "/create", data);

  return result;
};

export const getAll = async () => {
  const result = await request("GET", baseUrl);

  return result;
};
