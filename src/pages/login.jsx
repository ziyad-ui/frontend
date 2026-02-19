import React from 'react';
import './Login.css'; // Import the specific CSS file

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