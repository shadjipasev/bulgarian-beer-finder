import { useNavigate } from "react-router-dom";
import "./submitOrder.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function SubmitOrder() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const onSubmitHandler = (e) => {
    // e.preventDefault();
    navigate("/");
  };

  return (
    <div className="order_box">
      <header className="order_box_header">
        <h1 className="order_box_title">Благодарим ви!</h1>
      </header>
      <section>
        <p>
          "Благодарим, {user.username}! Вашата поръчка е приета успешно. Работим
          усилено, за да я обработим в най-кратък срок. 🚀"
        </p>
        <button onClick={onSubmitHandler} id="order_box_button">
          Обратно Към Каталога
        </button>
      </section>
    </div>
  );
}
