import { useContext, useEffect, useState } from "react";
import "./shoppingCart.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  emptyCart,
  getCartItems,
  removeItem,
} from "../../services/cartServices";
import AuthContext from "../../contexts/authContext";

export default function ShoppingCart() {
  const [getBeers, setBeer] = useState([]);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const [itemQuantity, setQuantity] = useState(1);
  const [totalPrice, setPrice] = useState(0);
  // console.log(itemQuantity);

  const [hasItems, setHasItems] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  async function onClickHandler(e) {
    e.preventDefault();
    await emptyCart(user.accessToken);
    // if (res.ok) {
    //   console.log(res);
    // }

    navigate("/thank-you");
  }

  useEffect(() => {
    getCartItems(user.accessToken).then((data) => {
      if (data.length > 0) {
        setHasItems(true);
        setIsEmpty(false);

        updatePrice(data);
        setBeer(data);
      }
    });
  }, []);

  const calculateTotalPrice = (data) => {
    let initialPrice = 0;
    data.forEach((item) => {
      initialPrice += Number(item.price) * Number(item.quantity); // Consider item quantity for price calculation
    });
    return initialPrice;
  };

  function updatePrice(data) {
    const price = calculateTotalPrice(data);
    setPrice(price.toFixed(2));
  }

  const onChangeQuantity = (event, beerId) => {
    const { value } = event.target;

    let newQuantity = Number(value);
    console.log(newQuantity);
    if (newQuantity < 1) {
      newQuantity = 1;
    }

    const updatedBeers = getBeers.map((beer) =>
      beer._id === beerId ? { ...beer, quantity: newQuantity } : beer
    );

    setBeer(updatedBeers);

    updatePrice(updatedBeers);
  };

  const removeHandler = async (e) => {
    await removeItem(user.accessToken, e._id);

    const updatedBeers = getBeers.filter((beer) => beer._id !== e._id);

    if (updatedBeers.length === 0) {
      setIsEmpty(true);
    }

    setBeer(updatedBeers);
    updatePrice(updatedBeers);
  };

  return (
    <div id="app">
      <section className="cart__container">
        <div>
          {hasItems && (
            <ul className="cart__products">
              {getBeers.map((beer) => (
                <li key={beer._id} className="row">
                  <div className="col left">
                    <div className="thumbnail">
                      <a href="">
                        <img src={beer.imgUrl} />
                      </a>
                    </div>
                    <div className="cart__detail">
                      <div className=".cart__name">
                        <a href={beer.imgUrl}>{beer.name}</a>
                      </div>
                      <div className="cart__price">{beer.price} лв.</div>
                    </div>
                  </div>
                  <div className="col right">
                    <div className="quantity">
                      <input
                        type="number"
                        // name="quantity"
                        defaultValue={1}
                        values={itemQuantity}
                        onChange={(event) => onChangeQuantity(event, beer._id)}
                        className="quantity"
                        step="1"
                      />
                    </div>
                    <div className="remove">
                      <svg
                        version="1.1"
                        className="close"
                        onClick={() => removeHandler(beer)}
                        values={beer}
                        // xmlns="//www.w3.org/2000/svg"
                        // xmlns:xlink="//www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 60 60"
                        // enable-background="new 0 0 60 60"
                        // xml:space="preserve"
                      >
                        <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon>
                      </svg>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {isEmpty && (
          <div className="empty-product">
            <h3>There are no products in your cart.</h3>
            {/* <button>Shopping now</button> */}
          </div>
        )}
      </section>
      {!isEmpty && (
        <section className="checkout__container">
          <div className="summary">
            <ul>
              <li className="total">
                Цена за всичко<span>{totalPrice} лв</span>
              </li>
            </ul>
          </div>

          <div className="checkout">
            <button type="button" onClick={onClickHandler}>
              Check Out
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
