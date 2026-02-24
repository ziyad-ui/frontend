<<<<<<< HEAD
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ProgramList from "./components/ProgramList";
import { programs } from "./mockData";
import "./App.css";

function App() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="App">
      <h1>School Dashboard</h1>

      {/* Show dashboard only if no program is selected */}
      {!selectedProgram && <Dashboard />}

      {/* ProgramList */}
      <div>
        <h2>Programs</h2>
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

        {/* ProgramDetails inline */}
        {selectedProgram && (
          <div className="program-details card" style={{ marginTop: "20px" }}>
            <button
              onClick={() => setSelectedProgram(null)}
              style={{
                marginBottom: "10px",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              ← Back
            </button>

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
    </div>
  );
}

export default App;
=======
import React from 'react';


const Login = () => {
  return (
    <div className="login-page-container">
      <div className="login-card">
        
        {/* Left Red Panel */}
        <div className="side-panel left"></div>

        {/* Center Login Form */}
        <div className="form-container">
          <h2>LOGIN</h2>
          <p>Please enter your login and password!</p>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            
            <a href="#" className="forgot-pass">Forgot password?</a>
            
            <button type="submit" className="btn-login">Login</button>
          </form>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-google-plus-g"></i></a>
          </div>
        </div>

        {/* Right Blue Panel */}
        <div className="side-panel right"></div>

      </div>
    </div>
  );
};

export default Login;
>>>>>>> aff8cadd9c67ca8c7d367bf53e90727442185104
