// import { useContext } from "react";
// import AuthContext from "../contexts/authContext";

const optionsBuild = (data) => {
  const options = {};
  // const { user } = useContext(AuthContext);
  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "Content-Type": "application/json",
      // "x-authorization": user.accessToken,
    };
    // } else {
    //   options.headers = {
    //     "x-authorization": user.accessToken,
    //   };
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
