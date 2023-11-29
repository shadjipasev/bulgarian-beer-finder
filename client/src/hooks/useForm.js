import { useState, useEffect } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    values,
    onChange,
  };
};

module.exports = {
  useForm,
};
