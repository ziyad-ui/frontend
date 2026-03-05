import programs from "../data/programs";
import subjects from "../data/subjects";

import {
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis
} from "recharts";

export default function Dashboard() {

  const activePrograms = programs.filter(p => p.status==="Active").length;
  const inactivePrograms = programs.length - activePrograms;

  const programData = [
    {name:"Active", value:activePrograms},
    {name:"Inactive", value:inactivePrograms}
  ];

  const subjectData = [
    {name:"Subjects", total:subjects.length}
  ];

  const COLORS = ["#00C49F","#FF8042"];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">

        <div className="card">
          <h3>Total Programs</h3>
          <p>{programs.length}</p>
        </div>

        <div className="card">
          <h3>Total Subjects</h3>
          <p>{subjects.length}</p>
        </div>

        <div className="card">
          <h3>Programs Status</h3>
          <PieChart width={200} height={200}>
            <Pie data={programData} dataKey="value" outerRadius={70}>
              {programData.map((entry,index)=>(
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="card">
          <h3>Subjects Count</h3>
          <BarChart width={250} height={200} data={subjectData}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="total" fill="#8884d8"/>
          </BarChart>
        </div>

      </div>
    </div>
  );
}