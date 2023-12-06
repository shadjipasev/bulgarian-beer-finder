import "./catalogs.css";
import beer1 from "../../assets/beer_001.png";
import beer2 from "../../assets/beer_002.png";
import beer3 from "../../assets/beer_003.png";
import beer4 from "../../assets/beer_004.png";
import { Link, useLocation } from "react-router-dom";

export default function Catalogs() {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("beer");
  console.log(name);
  return (
    <main>
      <div className="product">
        <div className="product__image">
          <img
            // src="https://media02.stockfood.com/largepreviews/NDExMTcxMDcz/13263583-Glass-of-beer-on-white-background.jpg"
            src={beer1}
            alt="Beer"
          />
        </div>
        <div className="product__title">Lager</div>
        <div className="product__actions">
          <Link to="/beer-type?beer=Lager">Разгледай каталог</Link>
        </div>
      </div>

      <div className="product">
        <div className="product__image">
          <img src={beer2} alt="Beer" className="" />
        </div>
        <div className="product__title">Stout</div>
        <div className="product__actions">
          <Link to="/beer-type?beer=Stout">Разгледай каталог</Link>
        </div>
      </div>

      <div className="product">
        <div className="product__image">
          <img src={beer3} alt="Beer" className="" />
        </div>
        <div className="product__title">Pilsner</div>
        <div className="product__actions">
          <Link to="/beer-type?beer=Pilsner">Разгледай каталог</Link>
        </div>
      </div>

      <div className="product">
        <div className="product__image">
          <img src={beer4} alt="Beer" className="" />
        </div>
        <div className="product__title">Ale</div>
        <div className="product__actions">
          <Link to="/beer-type?beer=Ale">Разгледай каталог</Link>
        </div>
      </div>
    </main>
  );
}
