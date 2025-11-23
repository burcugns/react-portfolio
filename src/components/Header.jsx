import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header>
      <h1>BURCU GUNES</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
