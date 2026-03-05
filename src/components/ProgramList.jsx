import React, { useState } from "react";
import programs from "../data/programs";
import ProgramCard from "./ProgramCard";
import FilterBar from "./FilterBar";

export default function ProgramList() {
  const [search, setSearch] = useState("");

  const filteredPrograms = programs.filter(
    (p) =>
      p.code.toLowerCase().includes(search.toLowerCase()) ||
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <FilterBar
        placeholder="Search programs by code or name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="programs-frame">
        {filteredPrograms.map((program) => (
          <ProgramCard key={program.code} program={program} />
        ))}
      </div>
    </div>
  );
}