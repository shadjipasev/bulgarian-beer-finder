import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { authLogin } from "../../services/authServices";
import "./login.css";
import AuthContext from "../../contexts/authContext";
import { useContext, useState } from "react";

export default function Login() {
  const { setSession } = useContext(AuthContext);

  const [error, setError] = useState({});
  const [serverError, setServerError] = useState();
  const [isValid, setValid] = useState(false);

  const loginSubmitHandler = async (values) => {
    const response = await authLogin(values);
    if (response.message) {
      setServerError(response.message);
      console.log(response.message);
    }
    setSession(response);
  };

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    username: "",
    password: "",
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
    }
  }
  // console.log(values);
  // console.log(values.password);

  return (
    <div id="login-page">
      <div id="form">
        <h2 id="login__header">Login</h2>
        {serverError ? <p id="server__error">{serverError}</p> : ""}
        <form className="login-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={values.username}
            onChange={onChange}
            onBlur={formValidate}
          />
          {error.userError ? <p id="login__error">{error.userError}</p> : ""}

          <input
            name="password"
            type="password"
            placeholder="password"
            value={values.password}
            onChange={onChange}
            onBlur={formValidate}
          />
          {error.passError ? <p id="login__error">{error.passError}</p> : ""}

          <button id="login_btn" disabled={isValid}>
            login
          </button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
