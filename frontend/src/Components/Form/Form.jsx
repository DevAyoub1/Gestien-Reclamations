import React, { useState } from "react";
import './form.css'
import Login from "./Login/Login.jsx"
import Register from "./Register/Register.jsx";
import SidebarAdmin from "../Sidebar/Admin/SidebarAdmin.jsx";
import Navbar from "../Navbar/Navbar.jsx";

export default function Form() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      
      <div className="logoform">
        <img src="/258541.svg" ></img>
      </div>
      <h2>Se Connecter / Registrer</h2>
      <div className={containerClass} id="container">
        <Register/>
        <Login />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
              Pour rester en contact avec nous, veuillez vous connecter avec vos informations personnelles
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Se Connecter
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Entrez vos informations personnelles et commencez votre voyage avec nous</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
