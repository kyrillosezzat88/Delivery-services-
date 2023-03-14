import { useState } from "react";
import "./Modal.scss";
const CreateOffer = ({ Handlestatus }) => {
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
    <div className=" Modal CreateOffer">
      <div className="Modal_content CreateOffer_content">
        <h1 className="Modal_content_title">Create your new shipment</h1>
        <form onSubmit={HandleSubmit}>
          <input
            type="date"
            name="pickupTime"
            className="inpt Modal_content_inpt"
            placeholder="Please enter pickup time"
            onChange={HandleChange}
            required
          />
          <input
            type="date"
            name="deliveryTime"
            className="inpt Modal_content_inpt"
            placeholder="Please enter deliovery time"
            onChange={HandleChange}
            required
          />
          <button className="btn-primary">Offer</button>
          <button className="btn-danger" onClick={() => Handlestatus(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateOffer;
