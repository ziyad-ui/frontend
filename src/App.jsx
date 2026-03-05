import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ProgramList from "./components/ProgramList";
import SubjectList from "./components/SubjectList";
import Login from "./pages/login";
import "./App.css";

export default function App(){
  const [loggedIn,setLoggedIn] = useState(false);
  const [page,setPage] = useState("dashboard");

  if(!loggedIn){
    return <Login onLogin={()=>setLoggedIn(true)} />
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <button onClick={()=>setPage("dashboard")}>Dashboard</button>
        <button onClick={()=>setPage("programs")}>Programs</button>
        <button onClick={()=>setPage("subjects")}>Subjects</button>
      </nav>

      {page==="dashboard" && <Dashboard />}
      {page==="programs" && <ProgramList />}
      {page==="subjects" && <SubjectList />}
    </div>
  );
}
