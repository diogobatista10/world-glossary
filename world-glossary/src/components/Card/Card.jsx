import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ country }) => {
  const { name, population, region, capital, flags, cca3 } = country;
  return (
    <Link to={`/countries/${name?.common}`} key={cca3}>
      <img src={flags.png} alt={cca3} />
      <h3>{name?.common}</h3>
      <span>
        <b>Population: </b>
        {population}
      </span>
      <span>
        <b>Region: </b>
        {region}
      </span>
      <span>
        <b>Capital: </b>
        {capital}
      </span>
    </Link>
  );
};

export default Card;
