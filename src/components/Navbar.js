import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          LH
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
