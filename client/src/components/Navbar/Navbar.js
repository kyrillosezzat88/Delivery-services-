import "./Navbar.scss";
import Logo from "../../assets/imgaes/logo.svg";
import { Link, useLocation } from "react-router-dom";
import CreateShipment from "../Modals/CreateShipment";
import { useState } from "react";
const Navbar = () => {
  const location = useLocation();
  const [showCreateShipment, setshowCreateShipment] = useState(false);
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
  // dashbaord navbar when user login
  const DashboardNav = () => (
    <ul className="Navbar_content_Links">
      <li>
        <button
          className="btn-primary"
          onClick={() => setshowCreateShipment(true)}
        >
          Create New Shipment
        </button>
      </li>
      <li>
        <Link to="/requests">My Requests</Link>
      </li>
      <li>
        <Link to="/shipments">My shipments</Link>
      </li>
    </ul>
  );
  return (
    <nav className="Navbar">
      {showCreateShipment && (
        <CreateShipment Handlestatus={setshowCreateShipment} />
      )}
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
          ) : location.pathname === "/dashboard" ? (
            <DashboardNav />
          ) : (
            <DefaultNav />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
