import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
axios.defaults.baseURL = "https://delivery-services-backend.vercel.app/api/v1";
axios.defaults.headers = { Authorization: `Bearer ${cookies.get("token")}` };

export default axios;
