import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "./services/api.js";
import "../App.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setError("Bitte alle Felder ausfüllen");
      return;
    }

    try {
      const response = await signup({ name: username, email, password });
      console.log("Erfolgreich registriert:", response.data);

      // Nach erfolgreicher Registrierung zum Login weiterleiten
      navigate("/login");
    } catch (error) {
      console.error("Fehler bei der Registrierung:", error);
      setError("Fehler bei der Registrierung");
    }

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <header>
        <p>
          <Link to="/">Home</Link>
        </p>
      </header>
      <div className="loginfront">
        <h2 className="h2">Sign Up</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="signupspace" type="submit">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
