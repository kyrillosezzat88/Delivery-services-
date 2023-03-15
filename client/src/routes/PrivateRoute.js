import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookie = new Cookies();

const PrivateRoute = () => {
  if (cookie.get("token")) return <Outlet />;
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
