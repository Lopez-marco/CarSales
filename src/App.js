import "./App.css";
import Navbar from "./components/Navbars/Navbar";
import Footer from "./components/Footers";
import Switch from "./components/Switch.jsx"
import { BrowserRouter as Router, } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
