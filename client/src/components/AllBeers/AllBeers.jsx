import { useEffect, useState } from "react";
import "./allBeers.css";
import { getAll } from "../../services/beerServices";
import BeerRecord from "../BeerRecord/BeerRecord";

export default function AllBeers() {
  const [getBeers, setBeer] = useState([]);
  useEffect(() => {
    getAll().then((data) => setBeer(data));
  }, []);

  console.log(getBeers);
  return (
    <>
      <h1>Beer Shop Catalog</h1>

      <div className="beer-cards">
        {getBeers.map((beer) => (
          <BeerRecord key={beer._id} {...beer} />
        ))}
      </div>
    </>
  );
}
