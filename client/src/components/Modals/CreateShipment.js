import { useContext, useState } from "react";
import { createPercel } from "../../Apis/percel";
import "./Modal.scss";
import Cookies from "universal-cookie";
import { AppContext } from "../../contextApi/AppContext";
const cookies = new Cookies();
const CreateShipment = ({ Handlestatus }) => {
  const { dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({});

  // Handle form change
  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //handle submit form
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { data },
      } = await createPercel(formData);
      dispatch({ type: "CREATE_SHIPMENT", payload: data });
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
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
