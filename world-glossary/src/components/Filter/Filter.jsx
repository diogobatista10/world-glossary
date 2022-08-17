import { ReactComponent as Search } from "../../assets/search-outline.svg";

import "./Filter.css";

const REGIONS = ["america", "europe", "asia", "oceania", "africa"];

const Filter = ({ onRegionChange, onSearchChange, theme }) => {
  return (
    <div className="filter">
      <div className="filter-container">
        <div className={`input-container f-theme-${theme}`}>
          <Search className="search" />
          <input
            className="filter-input"
            onChange={onSearchChange}
            placeholder="Search for a country..."
            type="search"
          />
        </div>

        <select
          onChange={onRegionChange}
          className={`filter-select f-theme-${theme}`}
          defaultValue=""
        >
          <option
            className={`filter-select-option f-theme-${theme}`}
            disabled
            value=""
          >
            Filter by Region
          </option>
          {REGIONS.map((region) => (
            <option
              key={region}
              className={`filter-select-option f-theme-${theme}`}
              value={region}
            >
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
