export default function ProgramCard({ program, onSelect }) {
  return (
    <div className="program-card" onClick={() => onSelect(program)}>
      <h3>{program.code}</h3>
      <p>{program.name}</p>

      <span>{program.type}</span>
      <span>{program.duration}</span>

      <p>Status: {program.status}</p>
    </div>
  );
}