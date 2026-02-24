console.log("Programs data:", programs);
console.log("Subjects data:", subjects);

import React from "react";
import { programs } from "../data/programs";
import { subjects } from "../data/subjects";

// Chart imports
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {

  // Total programs
  const totalPrograms = programs.length;

  // Total subjects
  const totalSubjects = subjects.length;

  // Active / Inactive programs
  const activePrograms = programs.filter(p => p.status.toLowerCase() === "active").length;
  const inactivePrograms = programs.filter(p => p.status.toLowerCase() !== "active").length;

  // Subjects with prerequisites
  const subjectsWithPrereq = subjects.filter(s => s.preRequisites && s.preRequisites.length > 0).length;

  // Subjects per semester
  const semesterCounts = subjects.reduce((acc, subj) => {
    acc[subj.semester] = (acc[subj.semester] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(semesterCounts),
    datasets: [
      {
        label: "Subjects per Semester",
        data: Object.values(semesterCounts),
        backgroundColor: "#646cff"
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Subjects per Semester"
      }
    }
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <div className="cards-container">
        {/* Total Programs */}
        <div className="card">
          <h3>Total Programs</h3>
          <p>{totalPrograms}</p>
        </div>

        {/* Total Subjects */}
        <div className="card">
          <h3>Total Subjects</h3>
          <p>{totalSubjects}</p>
        </div>

        {/* Active Programs */}
        <div className="card">
          <h3>Active Programs</h3>
          <p>
            <span className="badge" style={{ backgroundColor: "green", color: "white", padding: "5px 10px", borderRadius: "8px" }}>
              {activePrograms}
            </span>{" "}
            / {totalPrograms}
          </p>
        </div>

        {/* Inactive Programs */}
        <div className="card">
          <h3>Inactive Programs</h3>
          <p>
            <span className="badge" style={{ backgroundColor: "red", color: "white", padding: "5px 10px", borderRadius: "8px" }}>
              {inactivePrograms}
            </span>{" "}
            / {totalPrograms}
          </p>
        </div>

        {/* Subjects with Prerequisites */}
        <div className="card">
          <h3>Subjects with Prerequisites</h3>
          <p>
            <span className="badge" style={{ backgroundColor: "#646cff", color: "white", padding: "5px 10px", borderRadius: "8px" }}>
              {subjectsWithPrereq}
            </span>{" "}
            / {totalSubjects}
          </p>
        </div>
      </div>

      {/* Bar Chart for Subjects per Semester */}
      <div className="card" style={{ marginTop: "30px" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default Dashboard;