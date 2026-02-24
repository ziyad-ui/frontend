import React, { useState } from "react";
import { subjects } from "../data/subjects";
import SubjectCard from "./SubjectCard";
import SubjectDetails from "./SubjectDetails";
import FilterBar from "./FilterBar";

function SubjectList() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [filters, setFilters] = useState({
    searchText: "",
    semester: "",
    units: "",
    prereq: "",
    program: ""
  });

  // Apply filters
  const filteredSubjects = subjects.filter((subj) => {
    const matchesSearch =
      subj.code.toLowerCase().includes(filters.searchText.toLowerCase()) ||
      subj.title.toLowerCase().includes(filters.searchText.toLowerCase());

    const matchesSemester = filters.semester ? subj.semester === filters.semester : true;
    const matchesUnits = filters.units ? subj.units === Number(filters.units) : true;

    const matchesPrereq =
      filters.prereq === "with"
        ? subj.preRequisites.length > 0
        : filters.prereq === "without"
        ? subj.preRequisites.length === 0
        : true;

    const matchesProgram = filters.program ? subj.program === filters.program : true;

    return matchesSearch && matchesSemester && matchesUnits && matchesPrereq && matchesProgram;
  });

  return (
    <div className="container">
      <h2>Subjects</h2>

      {/* Filter Bar */}
      <FilterBar filters={filters} onFilterChange={setFilters} />

      {/* Subject Cards */}
      <div className="cards-container">
        {filteredSubjects.map((subj) => (
          <SubjectCard key={subj.code} subject={subj} onClick={setSelectedSubject} />
        ))}
      </div>

      {/* Selected Subject Details */}
      {selectedSubject && (
        <SubjectDetails subject={selectedSubject} onClose={() => setSelectedSubject(null)} />
      )}
    </div>
  );
}

export default SubjectList;