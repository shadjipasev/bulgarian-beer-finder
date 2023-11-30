import "./createBeer.css";
import { useState, useEffect } from "react";
import * as beerServices from "../../services/beerServices";

export default function CreateBeer() {
  //   const { values, onChange, onSubmit } = useForm(createSubmitHandler, {
  //     name: "",
  //     price: "",
  //     quantity: "",
  //     type: "IPA",
  //     imgUrl: "",
  //   });

  //   const createSubmitHandler = a(values) =>{

  //   }

  //   beerServices.create(values);

  const [beerData, setBeerData] = useState({
    name: "",
    price: "",
    quantity: "",
    type: "IPA",
    imgUrl: "",
  });

  const onCreateBeerHandler = async (e) => {
    e.preventDefault();
    // const beerData = Object.fromEntries(new FormData(e.currentTarget));
    console.log(beerData);
    try {
      await beerServices.create(beerData);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setBeerData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <h1>Create New Beer</h1>
      <form className="beer-form" onSubmit={onCreateBeerHandler}>
        <div className="form-group">
          <label htmlFor="name">Beer Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={onChange}
            value={beerData.name}
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
            value={beerData.price}
          />
        </div>

        <div className="form-group">
          <label htmlFor="beer-quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            onChange={onChange}
            value={beerData.quantity}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            onChange={onChange}
            value={beerData.type}
          >
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
            value={beerData.imgUrl}
          />
        </div>

        <div className="form-group">
          <button type="submit">Create Beer</button>
        </div>
      </form>
    </div>
  );
}
