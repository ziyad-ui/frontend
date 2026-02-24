import React from "react";

function ProgramCard({ program, onClick }) {
  return (
    <div className="card" onClick={() => onClick(program)}>
      <h4>{program.code} - {program.name}</h4>
      <p>Type: {program.type}</p>
      <p>Status: {program.status}</p>
      <p>Duration: {program.duration}</p>
      <p>Total Units: {program.totalUnits}</p>
    </div>
  );
}

export default ProgramCard;