import "./editBeer.css";
import { useState, useEffect } from "react";
import * as beerServices from "../../services/beerServices";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBeer() {
  const { beerId } = useParams();
  const navigate = useNavigate();
  const [beerData, setBeerData] = useState({
    name: "",
    price: "",
    quantity: "",
    type: "Lager",
    imgUrl: "",
    description: "",
  });

  useEffect(() => {
    // console.log();
    beerServices.getCurrentBeer(beerId).then((result) => {
      setBeerData(result);
    });
  }, []);

  const onEditBeerHandler = async (e) => {
    e.preventDefault();
    console.log(beerData);
    try {
      await beerServices.editBeer(beerId, beerData);
      navigate("/all-beers");
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
      <h1>Edid Beer</h1>
      <form className="beer-form" onSubmit={onEditBeerHandler}>
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
            type="select"
            id="type"
            name="type"
            onChange={onChange}
            value={beerData.type}
          >
            <option onChange={onChange} value="IPA">
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
            name="description"
            onChange={onChange}
            value={beerData.description}
          />
        </div>

        <div className="form-group">
          <button type="submit">Edit Beer</button>
        </div>
      </form>
    </div>
  );
}
