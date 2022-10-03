import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
