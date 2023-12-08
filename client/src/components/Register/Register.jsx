import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import "./register.css";
import AuthContext from "../../contexts/authContext";
import { authRegister } from "../../services/authServices";
import { Link } from "react-router-dom";

export default function Register() {
  const { setSession } = useContext(AuthContext);

  const [error, setError] = useState({});
  const [serverError, setServerError] = useState();
  // const [isValid, setValid] = useState(false);

  const registerSubmitHandler = async (values) => {
    const response = await authRegister(values);
    if (response.message) {
      setServerError(response.message);
      console.log(response.message);
    }
    setSession(response);
  };
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    username: "",
    email: "",
    password: "",
    rePass: "",
  });

  function formValidate(e) {
    // console.log(e);
    // console.log(values.password);

    if (e.target.name == "username") {
      if (values.username.length < 4) {
        setError({
          ...error,
          userError: "Username must be at least 4 characters long",
        });
        // setValid(true);
      } else if (values.usename !== "") {
        setError({
          ...error,
          userError: "",
        });
        // setValid(false);
      }
    } else if (e.target.name == "password") {
      if (values.password.length < 6) {
        setError({
          ...error,
          passError: "Password must be at least 6 characters long",
        });
        // setValid(true);
      } else if (values.password !== "") {
        setError({
          ...error,
          passError: "",
        });
        // setValid(false);
      }
    } else if (e.target.name == "rePass") {
      if (values.rePass !== values.password) {
        setError({
          ...error,
          rePassError: "Passwords must match!",
        });
        // setValid(true);
      } else if (values.rePass !== "") {
        setError({
          ...error,
          rePassError: "",
        });
        // setValid(false);
      }
    } else if (e.target.name == "email") {
      const emailRegex = /^[a-zA-Z0-9.-]{4,}@[a-z]+.[a-z]+$/;
      const isValidEmail = emailRegex.test(values.email);

      if (!isValidEmail) {
        setError({
          ...error,
          emailError: "Incorrect format!",
        });
        // setValid(true);
      } else {
        setError({
          ...error,
          emailError: "",
        });
        // setValid(false);
      }
    }
  }

  return (
    <div className="register-page">
      <div className="form">
        <h2 id="login__header">Register</h2>
        {serverError ? <p id="server__error">{serverError}</p> : ""}

        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={values.username}
            onChange={onChange}
            onBlur={formValidate}
          />
          {error.userError ? <p id="register__error">{error.userError}</p> : ""}

          <input
            type="email"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={onChange}
            onBlur={formValidate}
          />
          {error.emailError ? (
            <p id="register__error">{error.emailError}</p>
          ) : (
            ""
          )}

          <input
            type="password"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={onChange}
            onBlur={formValidate}
          />
          {error.passError ? <p id="register__error">{error.passError}</p> : ""}

          <input
            type="password"
            placeholder="Repeat password"
            name="rePass"
            value={values.rePass}
            onChange={onChange}
            onBlur={formValidate}
          />
          {error.rePassError ? (
            <p id="register__error">{error.rePassError}</p>
          ) : (
            ""
          )}

          <button>login</button>
          <p className="message">
            Already registered? <Link href="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
