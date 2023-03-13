import "./Navbar.scss";
import Logo from "../../assets/imgaes/logo.svg";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  // custome navbar based on the route

  //navbar in login page
  const LoginNav = () => <span>English</span>;

  // navbar in register page
  const RegisterNav = () => (
    <ul className="Navbar_content_Links">
      <li>
        <Link to="/register" state={{ type: "shipper" }}>
          <button className="btn-primary">I am a shipper</button>
        </Link>
      </li>
      <li>
        <Link to="/register" state={{ type: "carrier" }}>
          <button className="btn-outline">I am a carrier</button>
        </Link>
      </li>
    </ul>
  );

  //default navbar link in home page
  const DefaultNav = () => (
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
  );
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
            <LoginNav />
          ) : location.pathname === "/register" ? (
            <RegisterNav />
          ) : (
            <DefaultNav />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
