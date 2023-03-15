import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.headers = { Authorization: `Bearer ${cookies.get("token")}` };

export default axios;
