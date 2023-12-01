import "./register.css";

export default function Register() {
  return (
    <div className="register-page">
      <div className="form">
        <form>
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="Repeat password" />

          <button>login</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}
