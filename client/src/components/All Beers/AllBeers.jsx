import beer from "../../assets/Бургаско.png";
import "./allbeers.css";

export default function AllBeers() {
  return (
    <div className="container">
      <h1>Beer Shop Catalog</h1>

      <div className="beer-cards">
        <div className="beer-card">
          <img src={beer} alt="Beer 1" />
          <h2>Beer Name 1</h2>
          <p>
            Description of Beer 1. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <p>$10.99</p>
          <button>Add to Cart</button>
        </div>
      </div>

      <div className="beer-cards">
        <div className="beer-card">
          <img src={beer} alt="Beer 1" />
          <h2>Beer Name 1</h2>
          <p>
            Description of Beer 1. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <p>$10.99</p>
          <button>Add to Cart</button>
        </div>
      </div>

      <div className="beer-cards">
        <div className="beer-card">
          <img src={beer} alt="Beer 1" />
          <h2>Beer Name 1</h2>
          <p>
            Description of Beer 1. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <p>$10.99</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
