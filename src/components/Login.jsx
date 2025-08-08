import React, { useState } from 'react';
import "../styles/login.css";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const roles = [
    { id: 'admin', label: 'Admin', icon: 'bi bi-shield-lock', colorClass: 'role-admin' },
    { id: 'hr', label: 'HR', icon: 'bi bi-person-badge', colorClass: 'role-hr' },
    { id: 'employee', label: 'Employee', icon: 'bi bi-person-workspace', colorClass: 'role-employee' },
    { id: 'intern', label: 'Intern', icon: 'bi bi-person', colorClass: 'role-intern' }
  ];

  const handleLogin = () => {
    if (!selectedRole) {
      alert('Please select a role');
      return;
    }
    
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }
    
    console.log('Login attempt:', {
      username,
      password,
      rememberMe,
      role: selectedRole
    });
    
    alert(`Logging in as ${selectedRole}: ${username}`);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const selectRole = (roleId) => {
    setSelectedRole(roleId);
  };

  return(
    
    <div className="login-container">
        <div className="login-box">
          {/* Header */}
          <div className="logo-container">
            <div className="logo-icon"> 
              <img src="/images/NABFOUNDATION_LOGO-removebg-preview.png" alt="logo" className='rounded rounded-circle' style={{width: '80px', height:'80px' }}/>
            </div>
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle">Sign in to your account</p>
          </div>

          {/* Login Form */}
          <div>
            {/* Username Field */}
            <div className="form-floating">
              
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-floating">
              
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePassword}
              >
                <i className={` ${showPassword ? 'bi bi-eye' : 'bi bi-eye-slash'}`}></i>
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="remember-forgot">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            {/* Role Selection */}
            <div className="role-section">
              <div className="role-label">Select Role</div>
              <div className="role-buttons">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className={`role-btn ${role.colorClass} ${selectedRole === role.id ? 'active' : ''}`}
                    onClick={() => selectRole(role.id)}
                  >
                    <i className={role.icon}></i>
                    <span>{role.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Login Button */}
            <button
              type="button"
              className="btn login-btn"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>

          {/* Footer */}
          <div className="footer-text">
            Don't have an account? 
            <a href="#"> Contact your administrator</a>
          </div>
        </div>
      </div>
    
    
  );
};
export default Login;