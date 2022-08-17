import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BASE_URL_COUNTRY = "https://restcountries.com/v3.1/name";

const CardDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();
  console.log(`${BASE_URL_COUNTRY}/${countryName}`);
  useEffect(() => {
    const fetchCountry = async () => {
      await fetch(`${BASE_URL_COUNTRY}/${countryName}`)
        .then((response) => response.json())
        .then((data) => {
          setCountry(data[0]);
        });
    };
    fetchCountry();
  }, [countryName]);

  if (!country) {
    return <div>Waiting</div>;
  }

  const { name, population, region, capital, flags, cca3 } = country;

  return (
    <div>
      <div onClick={() => navigate(-1)}>Back</div>
      <div>
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
      </div>
    </div>
  );
};

export default CardDetail;
