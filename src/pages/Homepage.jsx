import React, { useEffect, useCallback, useState } from "react";

import Filter from "../components/Filter/Filter";
import Card from "../components/Card/Card";

import "./Homepage.css";

const BASE_URL = "https://restcountries.com/v3.1";

const Homepage = ({ theme, countries }) => {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (region) {
      const fetchDataCountries = async () => {
        await fetch(`${BASE_URL}/region/${region}`)
          .then((response) => response.json())
          .then((data) => setFilteredCountries(data));
      };
      fetchDataCountries();
    }
  }, [region]);

  useEffect(() => {
    if (search) {
      setFilteredCountries(
        countries.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(search.toLowerCase());
        })
      );
    }
  }, [countries, search]);

  const onRegionChange = useCallback((e) => {
    e.preventDefault();
    if (e.target?.value) {
      setRegion(e.target.value);
    }
  }, []);

  const onSearchChange = useCallback((e) => {
    e.preventDefault();
    if (e.target?.value) {
      setSearch(e.target.value);
    }
  }, []);

  if (!countries?.length) {
    return <div>Waiting...</div>;
  }

  const mappedCountries = filteredCountries?.length
    ? filteredCountries
    : countries;
  return (
    <div className="homepage">
      <Filter
        onRegionChange={onRegionChange}
        onSearchChange={onSearchChange}
        theme={theme}
      />
      <div className="countries">
        {mappedCountries.map((country) => (
          <Card key={country.cca3} country={country} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
