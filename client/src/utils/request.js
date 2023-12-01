const optionsBuild = (data) => {
  const options = {};

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "content-type": "application/json",
      "x-authorization": token,
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

  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
};
