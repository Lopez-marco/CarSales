import React, { useState, useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Navbars/Navbar";
import Footer from "./components/Footers";
import Switch from "./components/Switch.jsx"
import { BrowserRouter as Router, } from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
    window.location.href = "/";
  };

  return (
    <div>
      <Router>
      <Navbar sessionToken={sessionToken} clearToken={clearToken} />
      <Switch updateToken={updateToken} sessionToken={sessionToken}/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
