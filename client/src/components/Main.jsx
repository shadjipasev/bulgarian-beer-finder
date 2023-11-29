import "../styles/main.css";
import beer from "../assets/Бургаско.png";

export default function Main() {
  return (
    <div className="main">
      <div className="main__heading">
        <h1 className="main__title">You are in main</h1>
      </div>

      <section className="main__section">
        <div className="main__card">
          <img className="main__card__img" src={beer} alt="" />
          <p className="main__card__product">Бургаско-Кен</p>
          <p className="main__card__price">1.60 лв.</p>
          <p className="main__card__store">Супермаркет: Lidl</p>
        </div>
      </section>
    </div>
  );
}
