import React from "react";

function SubjectDetails({ subject, onClose }) {
  if (!subject) return null;

  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <h3>{subject.code} - {subject.title}</h3>
      <p><strong>Units:</strong> {subject.units}</p>
      <p><strong>Semester:</strong> {subject.semester}</p>
      <p><strong>Program:</strong> {subject.program}</p>
      <p><strong>Pre-requisites:</strong> {subject.preRequisites.length ? subject.preRequisites.join(", ") : "none"}</p>
      <p><strong>Co-requisites:</strong> {subject.coRequisites.length ? subject.coRequisites.join(", ") : "none"}</p>
      <p><strong>Description:</strong> {subject.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default SubjectDetails;