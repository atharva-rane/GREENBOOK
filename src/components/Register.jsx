import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { registrationHandler, getRegistrationData } from "../api/api.jsx";
import "../styles/Auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("FARMER");
  const [error, setError] = useState("");
  const [subscriber, setSubscriber] = useState(0);
  const errorMessages = {200: "success", 400: "missing fields", 409: "email already registered", 500: "internal server error"};
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    registrationHandler({ name, email, password, type: accountType }, setSubscriber);
  };

  useEffect(() => {
    if (subscriber > 0) {
      console.log("Registration response received. Subscriber count:", subscriber);
      const data = getRegistrationData();
      if (data.status && data.status !== 200) {
        setError(errorMessages[data.status]);
      } else {
        console.log("Registration successful");
        if (data.type === "FARMER") {
            navigate("/farmer-dashboard");
        } else if (data.type === "CORPORATE") {
            navigate("/corporate-dashboard");
        }
      }
    }
  }, [subscriber]);

  return (
    <div className="auth-page">
      <Navbar />
      <div className="auth-hero">
        <div className="auth-info">
          <p className="auth-eyebrow">Join Greenbook</p>
          <h1>Set up your climate-ready account</h1>
          <p className="auth-copy">
            Create a profile for you and your team to calculate, verify, and share
            sustainable farming impact with stakeholders.
          </p>
          <div className="auth-highlights">
            <span>Carbon-ready tools</span>
            <span>Union collaboration</span>
            <span>Insightful dashboards</span>
          </div>
        </div>

        <form className="auth-card" onSubmit={handleRegister}>
          <div className="auth-pill">Register</div>
          <h2>Create your account</h2>
          <p className="auth-subtitle">
            Kickstart verified reporting for your farm or union in a few steps.
          </p>

          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            className="auth-input"
            placeholder="Enter your name"
          />

          <label htmlFor="register-email">Email address</label>
          <input
            id="register-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="auth-input"
            placeholder="you@example.com"
          />

          <label htmlFor="account-type">Account type</label>
          <select
            id="account-type"
            name="accountType"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="auth-input"
            required
          >
            <option value="FARMER">Farmer / Union account</option>
            <option value="CORPORATE">Corporate account</option>
          </select>

          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            className="auth-input"
            placeholder="Create a strong password"
          />

          <button type="submit" className="auth-submit">
            Create account
          </button>

          {error && <p className="auth-error">{error}</p>}

          <p className="auth-switch">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
