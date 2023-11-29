import "./createBeer.css";
import { useForm } from "../../hooks/useForm";

export default function CreateBeer() {
  const { values, onChange, onSubmit } = useForm({
    name: "",
    price: "",
    quantity: "",
    type: "IPA",
    imgUrl: "",
  });

  return (
    <div className="container">
      <h1>Create New Beer</h1>
      <form className="beer-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Beer Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            value={values.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="beer-price">Price ($):</label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            onChange={onChange}
            value={values.price}
          />
        </div>

        <div className="form-group">
          <label htmlFor="beer-quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            onChange={onChange}
            value={values.quantity}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select id="type" name="type" onChange={onChange} value={values.type}>
            <option onChange={onChange} value="IPA">
              IPA
            </option>
            <option onChange={onChange} value="Stout">
              Stout
            </option>
            <option onChange={onChange} value="Pilsner">
              Pilsner
            </option>
            <option onChange={onChange} value="Ale">
              Ale
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            onChange={onChange}
            value={values.imgUrl}
          />
        </div>

        <div className="form-group">
          <button type="submit">Create Beer</button>
        </div>
      </form>
    </div>
  );
}
