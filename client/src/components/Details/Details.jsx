import { useEffect, useState } from "react";
import "./details.css";
import { deleteBeer, getCurrentBeer } from "../../services/beerServices";
import { useParams, Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../services/cartServices";

export default function Details() {
  const [beer, setBeer] = useState([]);

  const { beerId } = useParams();
  console.log(beerId);

  const navigate = useNavigate();

  useEffect(() => {
    getCurrentBeer(beerId).then((result) => {
      setBeer(result);
      console.log(result);
    });
  }, []);

  function deleteHandler() {
    deleteBeer(beerId);
    navigate("/all-beers");
  }

  async function addToCartHandler() {
    await addToCart(beerId);
  }

  console.log(beer);

  return (
    <div className="card">
      <div className="photo">
        <img src={beer.imgUrl} />
      </div>
      <div className="description">
        <h2>{beer.name}</h2>
        <p>Price: {beer.price}</p>
        <p>Type: {beer.type}</p>

        <p>{beer.description}</p>
        <button onClick={addToCartHandler}>Add to Cart</button>

        <button>
          <Link to={`/edit/${beerId}`}>Edit</Link>
        </button>

        <button onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}
