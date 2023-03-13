import "./Navbar.scss";
import Logo from "../../assets/imgaes/logo.svg";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="Navbar_content">
          <div className="Navbar_content_Logo">
            <Link to="/">
              <img src={Logo} alt="saloodo" height="60" />
            </Link>
          </div>
          {location.pathname === "/login" ? (
            <span>English</span>
          ) : (
            <ul className="Navbar_content_Links">
              <li>
                <Link to="/login">
                  <button className="btn-outline">Login</button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="btn-primary">Register</button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
