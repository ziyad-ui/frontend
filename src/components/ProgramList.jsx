import { useState } from "react";
import { programs } from "../mockData";

function ProgramList() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div>
      <h2>Programs</h2>

      {/* Program Cards */}
      <div className="cards-container">
        {programs.map((program) => (
          <div
            key={program.code}
            className="card"
            onClick={() => setSelectedProgram(program)}
            style={{ cursor: "pointer" }}
          >
            <h3>{program.code}</h3>
            <p>{program.name}</p>
          </div>
        ))}
      </div>

      {/* Program Details */}
      {selectedProgram && (
        <div className="program-details card" style={{ marginTop: "20px" }}>
          <h3>
            {selectedProgram.name} ({selectedProgram.code})
          </h3>
          <p>{selectedProgram.description}</p>
          <p>Duration: {selectedProgram.duration}</p>
          <p>Total Units: {selectedProgram.totalUnits}</p>

          {Object.entries(selectedProgram.yearLevels).map(([year, subjects]) => (
            <div key={year} style={{ marginTop: "10px" }}>
              <h4>{year}</h4>
              <ul>
                {subjects.map((subj) => (
                  <li key={subj}>{subj}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProgramList;