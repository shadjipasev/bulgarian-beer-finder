import "./createBeer.css";
import { useState, useEffect } from "react";
import * as beerServices from "../../services/beerServices";
import { useNavigate } from "react-router-dom";

export default function CreateBeer() {
  const [beerData, setBeerData] = useState({
    name: "",
    price: "",
    quantity: "",
    type: "Lager",
    imgUrl: "",
    description: "",
  });

  const navigate = useNavigate();
  const onCreateBeerHandler = async (e) => {
    e.preventDefault();
    // const beerData = Object.fromEntries(new FormData(e.currentTarget));
    // console.log(beerData);
    try {
      const res = await beerServices.createBeer(beerData);
      console.log(res);
      if (res) {
        console.log(res);
        navigate("/all-beers");
      }
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
            <option onChange={onChange} value="Lager">
              Lager
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
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            // id="imgUrl"
            name="description"
            onChange={onChange}
            value={beerData.description}
          />
        </div>

        <div className="form-group">
          <button type="submit">Create Beer</button>
        </div>
      </form>
    </div>
  );
}
