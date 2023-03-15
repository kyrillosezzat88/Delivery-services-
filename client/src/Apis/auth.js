import axios from "./axiosConfig";

//Register api
export const RegisterApi = (data) => axios.post("/auth/register", { ...data });

// Login api
export const LoginApi = (data) => axios.post("/auth/login", { ...data });
