import React from 'react';
import LoginForm from './LoginForm'; // adjust path if needed
import './Login.css';

const Login = (props) => (
  <div className="login-container">
    <h1 className="page-title">Login</h1>
    <div className="login-content">
      <LoginForm onLogin={props.onLogin} />
    </div>
  </div>
);

export default Login;
