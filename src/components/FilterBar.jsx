import React from "react";

function FilterBar({ filters, onFilterChange }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by code or title"
        value={filters.searchText}
        onChange={(e) => onFilterChange({ ...filters, searchText: e.target.value })}
      />

      <select
        value={filters.semester}
        onChange={(e) => onFilterChange({ ...filters, semester: e.target.value })}
      >
        <option value="">All Semesters</option>
        <option value="1st Semester">1st Semester</option>
        <option value="2nd Semester">2nd Semester</option>
        <option value="1st Term">1st Term</option>
        <option value="2nd Term">2nd Term</option>
      </select>

      <select
        value={filters.units}
        onChange={(e) => onFilterChange({ ...filters, units: e.target.value })}
      >
        <option value="">All Units</option>
        <option value="3">3 Units</option>
        <option value="4">4 Units</option>
        <option value="5">5 Units</option>
      </select>

      <select
        value={filters.prereq}
        onChange={(e) => onFilterChange({ ...filters, prereq: e.target.value })}
      >
        <option value="">All Subjects</option>
        <option value="with">With Prerequisites</option>
        <option value="without">Without Prerequisites</option>
      </select>

      <select
        value={filters.program}
        onChange={(e) => onFilterChange({ ...filters, program: e.target.value })}
      >
        <option value="">All Programs</option>
        <option value="BSIT">BSIT</option>
        <option value="BSCS">BSCS</option>
        {/* Add more programs from your mock data */}
      </select>
    </div>
  );
}

export default FilterBar;