import { useContext, useEffect, useState } from "react";
import "./details.css";
import { deleteBeer, getCurrentBeer } from "../../services/beerServices";
import { useParams, Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../services/cartServices";
import AuthContext from "../../contexts/authContext";

export default function Details() {
  const [beer, setBeer] = useState([]);

  const { beerId } = useParams();
  const { user } = useContext(AuthContext);
  console.log(beerId);

  const isAuth = user?._id ? true : false;
  const isAdmin = user?._id === "656f7b9f5989462a5ee0deba" ? true : false;

  const navigate = useNavigate();

  useEffect(() => {
    getCurrentBeer(beerId).then((result) => {
      setBeer(result);
      console.log(result);
    });
  }, []);

  async function deleteHandler() {
    await deleteBeer(beerId);
    navigate("/all-beers");
  }

  async function addToCartHandler() {
    console.log("This is token " + user.accessToken);
    await addToCart(beerId, user.accessToken);
  }

  console.log(beer);

  return (
    <div className="card">
      <div className="photo">
        <img src={beer.imgUrl} />
      </div>
      <div className="description">
        <h2>{beer.name}</h2>
        <br />

        <p>Цена: {beer.price}</p>
        <p>Тип: {beer.type}</p>

        <p>Описание: {beer.description}</p>
        {isAuth && (
          <button className="cart__button" onClick={addToCartHandler}>
            Add to Cart
          </button>
        )}

        {isAdmin && (
          <div className="admin__panel">
            <button className="admin__buttons">
              <Link to={`/edit/${beerId}`}>Edit</Link>
            </button>
            <button className="admin__buttons" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
