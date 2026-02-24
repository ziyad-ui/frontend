import React from "react";

function ProgramDetails({ program, onClose }) {
  if (!program) return null;

  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <h3>{program.code} - {program.name}</h3>
      <p><strong>Type:</strong> {program.type}</p>
      <p><strong>Duration:</strong> {program.duration}</p>
      <p><strong>Total Units:</strong> {program.totalUnits}</p>
      <p><strong>Status:</strong> {program.status}</p>
      <h4>Year Levels & Subjects:</h4>
      <ul>
        {Object.entries(program.yearLevels).map(([year, subjects]) => (
          <li key={year}>
            <strong>{year}:</strong> {subjects.length ? subjects.join(", ") : "No subjects"}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ProgramDetails;