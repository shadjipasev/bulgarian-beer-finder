import { request } from "../utils/request";

const baseUrl = "http://localhost:3030/cart";

export const addToCart = async (beerId, token) => {
  const result = await fetch(`${baseUrl}/add/${beerId}`, {
    headers: {
      "content-type": "application/json",
      "x-authorization": token,
    },
  });
  const response = await response.json();
  return result;
};

export const getCartItems = async (token) => {
  const result = await fetch(`${baseUrl}`, {
    headers: {
      "content-type": "application/json",
      "x-authorization": token,
    },
  });
  const response = await response.json();
  return response;
};
