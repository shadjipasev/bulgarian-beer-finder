const baseUrl = "http://localhost:3030/cart";

export const addToCart = async (beerId, token) => {
  const result = await fetch(`${baseUrl}/add/${beerId}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-authorization": token,
    },
  });
  const response = await result.json();
  return response;
};

export const getCartItems = async (token) => {
  const result = await fetch(`${baseUrl}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-authorization": token,
    },
  });
  const response = await result.json();
  return response;
};
