import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

import "./App.css";

const URL = "https://restcountries.com/v3.1/all";
const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchDataCountries = async () => {
      await fetch(URL)
        .then((response) => response.json())
        .then((data) => setCountries(data));
    };
    fetchDataCountries();
  }, []);

  if (!countries?.length) {
    return <div>Waiting...</div>;
  }

  return (
    <div className="app">
      {countries.map((country) => (
        <Card key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default App;
