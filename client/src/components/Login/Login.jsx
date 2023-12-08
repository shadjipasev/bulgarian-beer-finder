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

  const loginSubmitHandler = async (values) => {
    const response = await authLogin(values);
    if (response.message) {
      setServerError(response.message);
    }
    setSession(response);
  };

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    username: "",
    password: "",
  });

  // const onBlur = (e) => {

  // }

  //  function formValidate(e,)
  console.log(values);

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={values.name}
            onChange={onChange}
            // onBlur={onBlur}
          />
          <p className="login__error">Error</p>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={values.password}
            onChange={onChange}
          />
          <p className="login__error">Error</p>

          <button>login</button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
