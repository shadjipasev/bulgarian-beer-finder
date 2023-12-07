export default function CartRecord({
  _id,
  imgUrl,
  name,
  type,
  quantity,
  price,
}) {
  <li key={_id} className="row">
    <div className="col left">
      <div className="thumbnail">
        <a href="">
          <img src={imgUrl} />
        </a>
      </div>
      <div className="cart__detail">
        <div className=".cart__name">
          <a href={imgUrl}>{name}</a>
        </div>
        <div className="cart__price">{price} лв.</div>
      </div>
    </div>
    <div className="col right">
      <div className="quantity">
        <input
          type="number"
          name="quantity"
          value={itemQuantity}
          onChange={onChangeQuantity}
          className="quantity"
          step="1"
        />
      </div>
      <div className="remove">
        <svg
          version="1.1"
          className="close"
          xmlns="//www.w3.org/2000/svg"
          xmlns:xlink="//www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 60 60"
          enable-background="new 0 0 60 60"
          xml:space="preserve"
        >
          <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon>
        </svg>
      </div>
    </div>
  </li>;
}
