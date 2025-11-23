import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header>
      <h1>BURCU GUNES</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}

export default Header;
