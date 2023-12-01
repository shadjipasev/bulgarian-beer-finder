import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { authLogin } from "../../services/authServices";
import "./login.css";
import AuthContext from "../contexts/authContext";
import { useContext } from "react";

export default function Login() {
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    name: "",
    password: "",
  });

  const { setSession } = useContext(AuthContext);
  const loginSubmitHandler = async (data) => {
    const result = await authLogin(data.username, data.password);
    setSession(result);
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="username"
            value={values.name}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="password"
            value={values.password}
            onChange={onChange}
          />
          <button>login</button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
