import React from "react";
import { ReactComponent as Sun } from "../../assets/sunny-outline.svg";
import { ReactComponent as Moon } from "../../assets/moon-outline.svg";

import "./Header.css";

const Header = ({ theme, onClick }) => {
  return (
    <div className={`header theme-${theme}`}>
      <div className="header-container">
        <h2 className="header-title">Where is the world?</h2>
        <div className="header-toggle-button" onClick={onClick}>
          {theme === "light" ? (
            <Sun className="header-logo" />
          ) : (
            <Moon className="header-logo" />
          )}
          <span className="header-button-text">{theme} mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
