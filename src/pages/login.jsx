import { useState } from "react";
import "./Login.css";

export default function Login({onLogin}) {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username && password){
      onLogin();
    } else {
      alert("Please enter username and password");
    }
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Academic Portal</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}