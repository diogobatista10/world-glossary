import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ country, theme }) => {
  const { name, population, region, capital, flags, cca3 } = country;
  return (
    <div key={cca3} className={`card ca-theme-${theme}`}>
      <Link to={`/countries/${name?.common}`} className="card-image-container">
        <img className="card-image" src={flags.png} alt={cca3} />
      </Link>
      <div className="card-info">
        <h3>{name?.common}</h3>
        <p>
          <span>Population: </span>
          {population}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
