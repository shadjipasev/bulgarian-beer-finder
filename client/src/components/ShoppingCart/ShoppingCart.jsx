import { useContext, useEffect, useState } from "react";
import "./shoppingCart.css";
import { useParams } from "react-router-dom";
import { getCartItems } from "../../services/cartServices";
import AuthContext from "../../contexts/authContext";

export default function ShoppingCart() {
  const [getBeers, setBeer] = useState([]);

  const { user } = useContext(AuthContext);

  const [hasItems, setHasItems] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    getCartItems(user.accessToken).then((data) => {
      if (data.length > 0) {
        setHasItems(true);
        setIsEmpty(false);
      }
      setBeer(data);
      console.log(data);
    });
  }, []);

  let price = 0;
  for (const b of getBeers) {
    price += b.price;
  }

  return (
    <div id="app">
      {/* <!-- Header --> */}
      {/* <header className="container">
        <h1>Shopping Cart</h1>
        <ul className="breadcrumb">
          <li>Home</li>
          <li>Shopping Cart</li>
        </ul>
        <span className="count">Item count items in the bag</span>
      </header> */}
      {/* <!-- End Header --> */}

      {/* <!-- Product List --> */}
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
                      <input type="number" className="quantity" step="1" />
                    </div>
                    <div className="remove">
                      {/* <svg @click="removeItem(index)" version="1.1" className="close" xmlns="//www.w3.org/2000/svg" xmlns:xlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve"><polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon></svg> */}
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

      <section className="cart__container">
        <div className="summary">
          <ul>
            <li className="total">
              Цена за всичко<span>{price} лв</span>
            </li>
          </ul>
        </div>

        <div className="checkout">
          <button type="button">Check Out</button>
        </div>
      </section>
    </div>
  );
}
