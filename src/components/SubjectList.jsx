import React, { useState } from "react";
import subjectsData from "../data/subjects";
import SubjectCard from "./SubjectCard";
import FilterBar from "./FilterBar";

export default function SubjectList() {
  const [search, setSearch] = useState("");
  const [subjects, setSubjects] = useState(subjectsData);

  const handleSearch = (term) => {
    const filtered = subjectsData.filter(
      (s) =>
        s.title.toLowerCase().includes(term.toLowerCase()) ||
        s.code.toLowerCase().includes(term.toLowerCase())
    );
    setSubjects(filtered);
  };

  return (
    <div>
      <FilterBar onSearch={handleSearch} />

      <div className="subjects-frame">
        {subjects.map((subject) => (
          <SubjectCard key={subject.code} subject={subject} />
        ))}
      </div>
    </div>
  );
}