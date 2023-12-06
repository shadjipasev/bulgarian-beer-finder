import { Link, useParams } from "react-router-dom";
import "./beerRecord.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import { addToCart } from "../../services/cartServices";

function BeerRecord({ _id, imgUrl, name, type, quantity, price }) {
  // const { beerId } = useParams();
  const { user } = useContext(AuthContext);

  const isAuth = user?._id ? true : false;

  async function addToCartHandler() {
    // console.log("This is token " + user.accessToken);
    await addToCart(_id, user.accessToken);
  }
  return (
    <div className="beer-card">
      <img src={imgUrl} alt="Beer 1" />
      <h2>{name}</h2>
      <p>Вид: {type}</p>
      {/* <p>Количество:</p> */}
      <p>
        {quantity} х {price}лв.
      </p>

      {isAuth && (
        <>
          <Link onClick={addToCartHandler} className="buttons">
            Add to Cart
          </Link>
        </>
      )}

      <Link to={`/details/${_id}`} className="buttons">
        Details
      </Link>
    </div>
  );
}

export default BeerRecord;
