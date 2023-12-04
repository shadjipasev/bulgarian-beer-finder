import "./catalogs.css";
import beer1 from "../../assets/beer_001.png";
import beer2 from "../../assets/beer_002.png";
import beer3 from "../../assets/beer_003.png";
import beer4 from "../../assets/beer_004.png";

export default function Catalogs() {
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
        <div className="product__title">Lager Beer</div>
        <div className="product__actions">
          <a href="">Go To Catalog</a>
        </div>
      </div>

      <div className="product">
        <div className="product__image">
          <img src={beer2} alt="Beer" className="IPA" />
        </div>
        <div className="product__title">Lager Beer</div>
        <div className="product__actions">
          <a href="">Go To Catalog</a>
        </div>
      </div>

      <div className="product">
        <div className="product__image">
          <img src={beer3} alt="Beer" className="IPA" />
        </div>
        <div className="product__title">Lager Beer</div>
        <div className="product__actions">
          <a href="">Go To Catalog</a>
        </div>
      </div>

      <div className="product">
        <div className="product__image">
          <img src={beer4} alt="Beer" className="IPA" />
        </div>
        <div className="product__title">Lager Beer</div>
        <div className="product__actions">
          <a href="">Go To Catalog</a>
        </div>
      </div>
    </main>
  );
}
