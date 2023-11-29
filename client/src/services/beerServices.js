const baseUrl =
  "https://sofia-supermarkets-api-proxy.stefan-bratanov.workers.dev/products/flat/alcohol?category=beer&useCdn=true";

export const getAll = async () => {
  try {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
  } catch (error) {
    console.log(error);
  }
};
