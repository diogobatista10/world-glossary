import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../assets/arrow-back-outline.svg";

import "./CardDetail.css";

const BASE_URL_COUNTRY = "https://restcountries.com/v3.1/name";

const CardDetail = ({ theme, countries }) => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      await fetch(`${BASE_URL_COUNTRY}/${countryName}`)
        .then((response) => response.json())
        .then((data) => {
          setCountry({
            ...data[0],
            borders: data[0]?.borders?.map(
              (border) =>
                countries?.find((country) =>
                  [country.cca3, country.cca2, country.cioc].includes(border)
                )?.name.common
            ),
          });
        });
    };
    fetchCountry();
  }, [countries, countryName]);

  if (!country) {
    return <div>Waiting</div>;
  }

  const {
    name,
    population,
    region,
    capital,
    flags,
    cca3,
    borders,
    subregion,
    tld,
    currencies,
    languages,
  } = country;

  return (
    <div className="card-detail">
      <div
        className={`card-detail-button cd-theme-${theme}`}
        onClick={() => navigate(-1)}
      >
        <Arrow className="arrow" />
        Back
      </div>
      <div className="card-detail-container">
        <div className="card-detail-image-container">
          <img className="card-detail-image" src={flags.png} alt={cca3} />
        </div>
        <div className="card-detail-info">
          <h1 className="card-detail-name">{name.common}</h1>
          <div className="card-detail-sub-info">
            <h4>
              Native Name:{" "}
              <span>
                {name.nativeName
                  ? Object.values(name.nativeName)[0]?.official
                  : name.official}
              </span>
            </h4>
            <h4>
              Population: <span>{population}</span>
            </h4>
            <h4>
              Region: <span>{region}</span>
            </h4>
            <h4>
              Sub Region: <span>{subregion}</span>
            </h4>
            <h4>
              Capital: <span>{capital}</span>
            </h4>
            <h4>
              Top Level Domain: <span>{tld}</span>
            </h4>
            <h4>
              Currencies:{" "}
              <span>
                {currencies &&
                  Object.values(currencies)
                    ?.map((currency) => currency.name)
                    .join(" ")}
              </span>
            </h4>
            <h4>
              Languages:{" "}
              <span>{languages && Object.values(languages)?.join(", ")}</span>
            </h4>
          </div>
          <div className="card-detail-borders">
            <h4>Border Countries: </h4>
            {borders?.map((border) => (
              <Link
                key={border}
                to={`/countries/${border}`}
                className={`card-detail-link cd-theme-${theme}`}
              >
                {border}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
