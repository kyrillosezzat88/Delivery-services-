import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookie = new Cookies();

const PublicRoute = () => {
  if (cookie.get("token")) return <Navigate to={"/dashboard"} />;
  return <Outlet />;
};

export default PublicRoute;
