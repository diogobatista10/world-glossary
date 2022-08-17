import "./Filter.css";

const REGIONS = ["america", "europe", "asia", "oceania", "africa"];

const Filter = ({ onRegionChange, onSearchChange, theme }) => {
  return (
    <div className="filter">
      <div className="filter-container">
        <input
          className={`filter-input theme-${theme}`}
          onChange={onSearchChange}
          placeholder="Search for a country..."
          type="search"
        />
        <select
          onChange={onRegionChange}
          className={`filter-select theme-${theme}`}
        >
          <option
            className={`filter-select-option theme-${theme}`}
            disabled
            value=""
            selected
          >
            Filter by Region
          </option>
          {REGIONS.map((region) => (
            <option
              className={`filter-select-option theme-${theme}`}
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
