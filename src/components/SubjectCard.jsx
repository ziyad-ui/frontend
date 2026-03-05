export default function SubjectCard({ subject }) {
  return (
    <div className="subject-card">
      <h3>{subject.code}</h3>
      <p><strong>Title:</strong> {subject.title}</p>
      <p><strong>Units:</strong> {subject.units}</p>
      <p><strong>Semester:</strong> {subject.semester}</p>
      <p><strong>Program:</strong> {subject.program}</p>
      <p><strong>Pre-req:</strong> {subject.prerequisites || "None"}</p>
      <p><strong>Co-req:</strong> {subject.corequisites || "None"}</p>
    </div>
  );
}