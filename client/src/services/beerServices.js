import { request } from "../utils/request";

const baseUrl = "http://localhost:3030/beer";

export const createBeer = async (data) => {
  const result = await request("POST", baseUrl + "/create", data);

  return result;
};

export const getAll = async () => {
  const result = await request("GET", baseUrl);

  return result;
};

export const getCurrentBeer = async (beerId) => {
  const result = await request("GET", baseUrl + `/details/${beerId}`);

  return result;
};

export const editBeer = async (beerId, data) => {
  const result = await request("PUT", baseUrl + `/edit/${beerId}`, data);

  return result;
};

export const deleteBeer = async (beerId) => {
  const result = await request("GET", baseUrl + `/delete/${beerId}`);

  return result;
};

export const getByType = async (type) => {
  const result = await request("GET", `${baseUrl}/${type}`);

  return result;
};
