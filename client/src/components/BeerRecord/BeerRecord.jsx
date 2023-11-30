import "./beerRecord.css";

function BeerRecord({ imgUrl, name, type, quantity, price }) {
  return (
    <div className="beer-card">
      <img src={imgUrl} alt="Beer 1" />
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{quantity}</p>
      <p>{price}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default BeerRecord;
