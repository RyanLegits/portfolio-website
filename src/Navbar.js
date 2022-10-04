import { Link } from 'react-router-dom';
import logo from './logo30.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
