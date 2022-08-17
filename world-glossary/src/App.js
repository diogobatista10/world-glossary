import { useCallback, useEffect, useState } from "react";
import Card from "./components/Card/Card";

import "./App.css";
import Filter from "./components/Filter/Filter";

const BASE_URL = "https://restcountries.com/v3.1";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchDataCountries = async () => {
      await fetch(`${BASE_URL}/all`)
        .then((response) => response.json())
        .then((data) => setCountries(data));
    };
    fetchDataCountries();
  }, []);

  useEffect(() => {
    if (region) {
      const fetchDataCountries = async () => {
        await fetch(`${BASE_URL}/region/${region}`)
          .then((response) => response.json())
          .then((data) => setCountries(data));
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

  const mappedCountries = filteredCountries ?? countries;

  return (
    <div className="app">
      <Filter onRegionChange={onRegionChange} onSearchChange={onSearchChange} />
      {mappedCountries.map((country) => (
        <Card key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default App;
