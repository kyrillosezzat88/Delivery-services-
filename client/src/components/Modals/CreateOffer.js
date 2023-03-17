import { useContext, useState } from "react";
import { updateParcel } from "../../Apis/percel";
import { AppContext } from "../../contextApi/AppContext";
import "./Modal.scss";
const CreateOffer = ({ Handlestatus, PercelID }) => {
  const [formData, setFormData] = useState({});
  const { dispatch } = useContext(AppContext);
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
      } = await updateParcel(PercelID, {
        ...formData,
        status: "intransit",
      });

      dispatch({ type: "UPDATE_PARCEL", payload: data._id });
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data.message);
    }
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
