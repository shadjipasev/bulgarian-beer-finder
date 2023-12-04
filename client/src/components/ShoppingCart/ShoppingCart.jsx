import "./shoppingCart.css";

export default function ShoppingCart() {
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
      <section className="container">
        <div>
          <ul className="products">
            <li className="row">
              <div className="col left">
                <div className="thumbnail">
                  <a href="#">
                    {/* <img :src="product.image" :alt="product.name" /> */}
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="#">Product name</a>
                  </div>
                  <div className="description">Product description</div>
                  <div className="price">Product price</div>
                </div>
              </div>

              <div className="col right">
                {/* <div className="quantity">
            <input type="number" className="quantity" step="1" :value="product.quantity" @input="updateQuantity(index, $event)" @blur="checkQuantity(index, $event)" />
          </div> */}

                <div className="remove">
                  {/* <svg @click="removeItem(index)" version="1.1" className="close" xmlns="//www.w3.org/2000/svg" xmlns:xlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve"><polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon></svg> */}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <button>Shopping now</button>
        </div>
      </section>
      {/* <!-- End Product List --> */}

      {/* <!-- Summary --> */}
      <section className="container" v-if="products.length > 0">
        {/* <div class="promotion">
          <label for="promo-code">Have A Promo Code?</label>
          <input type="text" id="promo-code" v-model="promoCode" />
          <button type="button" @click="checkPromoCode"></button>
        </div> */}

        <div className="summary">
          <ul>
            <li>
              Subtotal <span>Subtotal</span>
            </li>
            <li v-if="discount > 0">
              Discount <span>Discount</span>
            </li>
            <li>
              Tax <span>Tax</span>
            </li>
            <li className="total">
              Total <span>Total Price</span>
            </li>
          </ul>
        </div>

        <div className="checkout">
          <button type="button">Check Out</button>
        </div>
      </section>
      {/* <!-- End Summary --> */}
    </div>
  );
}
