import "./Filter.css";

const REGIONS = ["america", "europe", "asia", "oceania", "africa"];

const Filter = ({ onRegionChange, onSearchChange }) => {
  return (
    <div>
      <select onChange={onRegionChange}>
        <option placeholder="Filter By Region" />
        {REGIONS.map((region) => (
          <option value={region}>{region}</option>
        ))}
      </select>
      <input
        onChange={onSearchChange}
        placeholder="Search for a country..."
        type="search"
      />
    </div>
  );
};

export default Filter;
