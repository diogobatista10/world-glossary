import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetail from "./components/CardDetail/CardDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/countries/:countryName" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
