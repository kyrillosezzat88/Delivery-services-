import "./Navbar.scss";
import Logo from "../../assets/imgaes/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CreateShipment from "../Modals/CreateShipment";
import { useContext, useState } from "react";
import Cookies from "universal-cookie";
import { AppContext } from "../../contextApi/AppContext";
const cookies = new Cookies();

const Navbar = () => {
  const { disptach } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showCreateShipment, setshowCreateShipment] = useState(false);

  // Logout
  const Logout = () => {
    cookies.remove("user");
    cookies.remove("token");
    disptach({ type: "LOG_OUT" });
    navigate("/login");
  };

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
        <Link to="/register" state={{ type: "carrier" }}>
          <button className="btn-primary">Register</button>
        </Link>
      </li>
    </ul>
  );
  // dashbaord navbar when user login
  const DashboardNav = () => (
    <ul className="Navbar_content_Links">
      {cookies.get("user").isShipper && (
        <>
          <li>
            <button
              className="btn-primary"
              onClick={() => setshowCreateShipment(true)}
            >
              Create New Shipment
            </button>
          </li>
          <li>
            <Link to="/dashboard">My shipments</Link>
          </li>
        </>
      )}
      {!cookies.get("user").isShipper && (
        <>
          <li>
            <Link to="/dashboard">Marketplace</Link>
          </li>
          <li>
            <Link to="/shipments">My shipments</Link>
          </li>
        </>
      )}
      <li>
        <button className="btn-outline" onClick={Logout}>
          Logout
        </button>
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
          ) : ["/dashboard", "/shipments"].includes(location.pathname) ? (
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
