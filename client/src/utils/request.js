const optionsBuild = (data) => {
  const options = {};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "Content-Type": "application/json",
    };
  }

  return options;
};

export const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...optionsBuild(data),
    method,
  });

  const result = await response.json();
  return result;
  // if (result.ok) {
  //   return result;
  // } else {
  //   throw new Error(result.error);
  // }
};
