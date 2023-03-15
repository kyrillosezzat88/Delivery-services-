import axios from "./axiosConfig";

// get all percels
export const allPercels = () => axios.get("/percel");

// create percel
export const createPercel = (data) => axios.post("/percel/create", { ...data });

// all percels of shipper
export const percelsShipper = () => axios.get("/percel/shipper/shipments");

// update parcel
export const updateParcel = (parcelID, data) =>
  axios.put(`/percel/update/${parcelID}`, { ...data });

//get all carrier shipments
export const carrierShipments = () => axios.get("/percel/carrier/shipments");
