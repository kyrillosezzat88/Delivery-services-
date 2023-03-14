import { useState } from "react";
import "./Modal.scss";
const CreateShipment = ({ Handlestatus }) => {
  const [formData, setFormData] = useState({});

  // Handle form change
  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //handle submit form
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log({ formData });
    Handlestatus(false);
  };
  return (
    <div className=" Modal CreateShipment">
      <div className="Modal_content CreateShipment_content">
        <h1 className="Modal_content_title">Create your new shipment</h1>
        <form onSubmit={HandleSubmit}>
          <input
            type="text"
            name="name"
            className="inpt Modal_content_inpt"
            placeholder="your shipment name"
            onChange={HandleChange}
            required
          />
          <input
            type="text"
            name="pickup_address"
            className="inpt Modal_content_inpt"
            placeholder="your pickup address"
            onChange={HandleChange}
            required
          />
          <input
            type="text"
            name="dropoff_address"
            className="inpt Modal_content_inpt"
            placeholder="your drop off address"
            onChange={HandleChange}
            required
          />
          <button className="btn-primary">Create</button>
          <button className="btn-danger" onClick={() => Handlestatus(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateShipment;
