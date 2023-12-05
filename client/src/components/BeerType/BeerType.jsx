import { useEffect, useState } from "react";
import "./beerType.css";
import { getByType } from "../../services/beerServices";
import BeerRecord from "../BeerRecord/BeerRecord";
import { useLocation } from "react-router-dom";

export default function BeerType() {
  const [getBeers, setBeer] = useState([]);
  const search = useLocation().search;
  const type = new URLSearchParams(search).get("beer");
  useEffect(() => {
    console.log(type);
    getByType(type).then((data) => setBeer(data));
  }, []);

  console.log(getBeers);
  return (
    <>
      <h1>Beer Catalog</h1>

      <div className="beer-cards">
        {getBeers.map((beer) => (
          <BeerRecord key={beer._id} {...beer} />
        ))}
      </div>
    </>
  );
}
