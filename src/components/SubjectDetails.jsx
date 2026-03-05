export default function SubjectDetails({ subject, back }) {

  return (
    <div className="details">

      <button onClick={back}>Back</button>

      <h2>{subject.title}</h2>

      <p><b>Code:</b> {subject.code}</p>
      <p><b>Units:</b> {subject.units}</p>
      <p><b>Program:</b> {subject.program}</p>

      <p><b>Semester:</b> {subject.semester}</p>

      <p><b>Pre-requisites:</b> {subject.prerequisites}</p>
      <p><b>Co-requisites:</b> {subject.corequisites}</p>

      <p>{subject.description}</p>

    </div>
  );
}