import { useContext } from "react";
import useForm from "../../hooks/useForm";
import "./register.css";
import AuthContext from "../contexts/authContext";
import { authRegister } from "../../services/authServices";

export default function Register() {
  const { setSession } = useContext(AuthContext);

  const registerSubmitHandler = async (values) => {
    const response = await authRegister(values);

    setSession(response);
  };
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    username: "",
    email: "",
    password: "",
    rePass: "",
  });

  return (
    <div className="register-page">
      <div className="form">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={values.username}
            onChange={onChange}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Repeat password"
            name="rePass"
            value={values.rePass}
            onChange={onChange}
          />

          <button>login</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
