import React, { useContext, useState } from "react";
import { UserContext } from "../UserProvider";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import Cookies from "js-cookie";

const Login = () => {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { loginUser } = useContext(UserContext);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginUser(email, password);
      console.log("Response:", response);

      if (response) {
        const token = response.user.token;
        Cookies.set("jwt", token);
        const cookieValue = Cookies.get("jwt");
        console.log("Cookie value:", cookieValue);
        Navigate("/");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        console.log("Login error:", errorMessage);
        setError(errorMessage);
      } else {
        console.log("An error occurred during login:", error.message);
        setError("An error occurred during login");
      }
    }

    setLoading(false);
  };
  return (
    <div className="signin-form">
      <div className="register-links">
        <NavLink to="/login">Sign in</NavLink>
        <NavLink to="/register">Sign up</NavLink>
      </div>
      <form className="register-inputs" onSubmit={handleLogin}>
        {error && <div className="error-message">{error} !</div>}
        <div className="input-group">
          <input
            className="input"
            type="email"
            name="email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <FontAwesomeIcon
            icon={faEye}
            className="showing-password"
            onClick={handleTogglePassword}
          />
          <NavLink to="/">Forgot password?</NavLink>
        </div>
        <div className="register-buttons">
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
