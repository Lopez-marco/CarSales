import React, {useState, useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbars/Navbar";
import Footer from "./components/Footers";
import Switch from "./components/Switch.jsx";
import {BrowserRouter as Router} from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [website] = useState("Car Dealer");

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>{website} </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Router>
        <Navbar sessionToken={sessionToken} clearToken={clearToken} />
        <Switch updateToken={updateToken} sessionToken={sessionToken} website={website} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
