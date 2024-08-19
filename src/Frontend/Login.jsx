import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "./services/api.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Bitte alle Felder ausfüllen");
      return;
    }

    try {
      const response = await login({ email, password });
      console.log("Erfolgreich eingeloggt:", response.data);

      // Setze hier das localStorage oder sessionStorage mit der Benutzer-ID
      localStorage.setItem("userId", response.data.userId);

      // Weiterleitung nach erfolgreichem Login, z.B. zur Startseite
      //navigate("/");
    } catch (error) {
      console.error("Fehler beim Einloggen:", error);
      setError("Ungültige Anmeldedaten");
    }

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
        <h2 className="h2">Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="spacinginside">
        <form onSubmit={handleSubmit}>
          <div className="userinput">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="passinput">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="loginspace" type="submit">
            Login
          </button>
        </form>
        </div>
        <div className="spacing">
          <p>
            Don't have an account? <br /> <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
