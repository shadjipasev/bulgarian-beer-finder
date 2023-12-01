import "./register.css";

export default function Register() {
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    email: "",
    username: "",
    password: "",
    rePass,
  });

  return (
    <div className="register-page">
      <div className="form">
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            value={values.username}
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
            value={rePass}
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
