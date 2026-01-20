import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { loginHandler, getLoginData } from "../api/api.jsx";
import "../styles/Auth.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [subscriber, setSubscriber] = useState(0);
  const errorMessages = {200: "success", 400: "missing fields", 401: "incorrect email or password", 500: "internal server error"};
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginHandler({ email, password }, setSubscriber);
  };

  useEffect(() => {
    if (subscriber > 0) {
      console.log("Login response received. Subscriber count:", subscriber);
      const data = getLoginData();
      console.log(data);
      if (data.status && data.status !== 200) {
        setError(errorMessages[data.status]);
      } else {
        console.log("Login successful");
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
          <p className="auth-eyebrow">Welcome back</p>
          <h1>Access your climate impact tools</h1>
          <p className="auth-copy">
            Sign in to pick up calculations, track dashboards, and keep growing
            farmer-led sustainability projects.
          </p>
          <div className="auth-highlights">
            <span>Secure access</span>
            <span>Live dashboards</span>
            <span>Farmer-first support</span>
          </div>
        </div>

        <form className="auth-card" onSubmit={handleLogin}>
          <div className="auth-pill">Login</div>
          <h2>Sign in to Greenbook</h2>
          <p className="auth-subtitle">
            Enter your details to continue creating measurable climate impact.
          </p>

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="auth-input"
            placeholder="you@example.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="auth-input"
            placeholder="Enter your password"
          />

          <button type="submit" className="auth-submit">
            Login
          </button>

            {error && <p className="auth-error">{error}</p>}

          <p className="auth-switch">
            New to Greenbook? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
