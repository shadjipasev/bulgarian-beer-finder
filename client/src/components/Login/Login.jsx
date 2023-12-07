import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { authLogin } from "../../services/authServices";
import "./login.css";
import AuthContext from "../../contexts/authContext";
import { useContext } from "react";

export default function Login() {
  const { setSession } = useContext(AuthContext);
  const loginSubmitHandler = async (values) => {
    const response = await authLogin(values);
    setSession(response);
  };

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    username: "",
    password: "",
  });

  // const onBlur = (e) => {

  // }

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
