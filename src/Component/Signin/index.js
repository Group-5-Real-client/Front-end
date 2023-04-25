import { NavLink,Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="register-form">
      <div className="register-links">
        <NavLink to="/Register">Sign up</NavLink>
        <NavLink to="/login">Sign in</NavLink>
      </div>
      <form className="register-inputs" >
        <div className="input-group">
          <input
            className="input"
            type="email"
            name="email"
            required={true}
            // value={formData.email}
            // onChange={handleChange}
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
        </div>
        <div className="input-group">
          <input
            className="input"
            type={showPassword ? "text" : "password"}
            name="password"
            required={true}
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <FontAwesomeIcon
            icon={faEye}
            className="showing-password"
            onClick={handleTogglePassword}
          />
        <NavLink to="/" >Forgot password?</NavLink>
        </div>
        <div className="register-buttons">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
