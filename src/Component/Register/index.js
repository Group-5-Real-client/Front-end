import React, { createContext, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserProvider";



const Register = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    Address: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [errors, setErrors] = useState({});

  const { setUser, registerUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await registerUser(formData);
        Navigate ("/Login"); 
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validate = () => {
    let errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      errors.phone = "Phone is invalid";
    }

    if (!formData.Address.trim()) {
      errors.address = "Address is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="register-form">
      <div className="register-links">
        <NavLink to="/login">Sign in</NavLink>
        <NavLink to="/register">Sign up</NavLink>
      </div>
      <form className="register-inputs" onSubmit={handleSubmit}>
        {errors.username && <p className="error">{errors.username}</p>}
        <div className="input-group">
          <input
            className="input"
            type="text"
            name="username"
            required={true}
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="username" className="input-label">
            Username
          </label>
        </div>

        <div className="input-group">
          <input
            className="input"
            type="email"
            name="email"
            required={true}
            value={formData.email}
            onChange={handleChange}
            autoComplete="username"
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <input
            className="input"
            type={showPassword ? "text" : "password"}
            name="password"
            required={true}
            value={formData.password}
            onChange={handleChange}
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
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="input-group">
          <input
            className="input"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <label htmlFor="phone" className="input-label">
            Phone
          </label>
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="input-group">
          <input
            className="input"
            type="text"
            name="Address"
            required
            value={formData.Address}
            onChange={handleChange}
          />
          <label htmlFor="address" className="input-label">
            Address
          </label>
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="register-buttons">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
