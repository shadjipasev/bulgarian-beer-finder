import { Link } from "react-router-dom";
import "./beerRecord.css";

function BeerRecord({ _id, imgUrl, name, type, quantity, price }) {
  return (
    <div className="beer-card">
      <img src={imgUrl} alt="Beer 1" />
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{quantity}</p>
      <p>{price}</p>

      <Link className="buttons">Add to Cart</Link>
      <Link to={`/details/${_id}`} className="buttons">
        Details
      </Link>
    </div>
  );
}

export default BeerRecord;
