export default function ProgramDetails({ program, back }) {

  return (
    <div className="details">

      <button onClick={back}>Back</button>

      <h2>{program.name}</h2>

      <p><b>Code:</b> {program.code}</p>
      <p><b>Duration:</b> {program.duration}</p>
      <p><b>Total Units:</b> {program.totalUnits}</p>
      <p><b>Status:</b> {program.status}</p>

      <p>{program.description}</p>

      <h3>Year Levels</h3>

      {Object.entries(program.years).map(([year, subjects]) => (
        <div key={year}>
          <h4>{year}</h4>
          <ul>
            {subjects.map(sub => (
              <li key={sub}>{sub}</li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  );
}