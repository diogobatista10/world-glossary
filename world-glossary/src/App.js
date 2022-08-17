import { useCallback, useEffect, useState } from "react";
import Card from "./components/Card/Card";

import "./App.css";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";

const BASE_URL = "https://restcountries.com/v3.1";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [theme, setTheme] = useState("light");

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

  const onThemeChange = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  }, [theme]);

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

  if (!countries?.length) {
    return <div>Waiting...</div>;
  }

  const mappedCountries = filteredCountries?.length
    ? filteredCountries
    : countries;

  return (
    <div className={`app theme-${theme}`}>
      <Header theme={theme} onClick={onThemeChange} />
      <div className="app-body">
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
    </div>
  );
};

export default App;
