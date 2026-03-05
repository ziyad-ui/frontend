import { useState } from "react";

export default function FilterBar({ onSearch }) {

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="filter-bar">

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />

    </div>
  );
}