import { useCallback, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import CardDetail from "./pages/CardDetail/CardDetail";

import "./App.css";
import Homepage from "./pages/Homepage";
const BASE_URL = "https://restcountries.com/v3.1";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const fetchDataCountries = async () => {
      await fetch(`${BASE_URL}/all`)
        .then((response) => response.json())
        .then((data) => setCountries(data));
    };
    fetchDataCountries();
  }, []);

  const onThemeChange = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  }, [theme]);

  return (
    <div className={`app theme-${theme}`}>
      <Header theme={theme} onClick={onThemeChange} />
      <div className="app-body">
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage theme={theme} countries={countries} />}
          />
          <Route
            path="/countries/:countryName"
            element={<CardDetail theme={theme} countries={countries} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
