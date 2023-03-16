import { useContext, useEffect, useState } from "react";
import { CreateOffer, Navbar } from "../../components";
import "./Dashboard.scss";
import Cookies from "universal-cookie";
import { allPercels, percelsShipper } from "../../Apis/percel";
import { AppContext } from "../../contextApi/AppContext";

const cookies = new Cookies();
const Dashboard = () => {
  const { AppData, dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({ type: "LOADING" });

    // check user if user shipper will call shipepr api if not will call carrier api
    if (cookies.get("user").isShipper) {
      (async () => {
        try {
          const {
            data: { data },
          } = await percelsShipper();
          dispatch({ type: "GET_PERCELS", payload: data });
        } catch (error) {
          console.log(error.response.data.message);
        }
      })();
    } else {
      (async () => {
        try {
          const {
            data: { data },
          } = await allPercels();
          dispatch({ type: "GET_PERCELS", payload: data });
        } catch (error) {
          console.log(error.response.data.message);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // shipper table
  const ShipperTable = () => {
    return (
      <table className="Dashboard_content_table">
        <thead>
          <tr>
            <th>Num</th>
            <th>Request details</th>
            <th>picked-up By</th>
            <th>Estimated pick-up</th>
            <th>Estimated drop-off</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {AppData.percels?.map(
            (
              {
                name,
                dropoff_address,
                pickup_address,
                status,
                deliveryTime,
                pickupTime,
                pickedupBy,
              },
              index
            ) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="Dashboard_content_table_request-details">
                    <p>
                      <span>percel name: </span> {name}
                    </p>
                    <p>
                      <span>pickup address: </span>
                      {pickup_address}
                    </p>
                    <p>
                      <span>drop off address: </span>
                      {dropoff_address}
                    </p>
                  </div>
                </td>
                <td>
                  {pickedupBy?.first_name} {pickedupBy?.last_name}
                </td>
                <td>
                  {pickupTime
                    ? new Date(pickupTime).toDateString()
                    : "_______________"}
                </td>
                <td>
                  {deliveryTime
                    ? new Date(deliveryTime).toDateString()
                    : "_______________"}
                </td>
                <td
                  className={`Dashboard_content_table_request-status Dashboard_content_table_request-status_${status}`}
                >
                  <span>{status}</span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    );
  };

  // carrier table
  const CarrierTable = () => {
    const [showCreateOffer, setShowCreateOffer] = useState(false);
    const [percelID, setPercelID] = useState(null);

    // handle Take it button ( create offer from biker )
    const HanndelTakeIt = (percelId) => {
      setPercelID(percelId);
      setShowCreateOffer(true);
    };
    return (
      <>
        {showCreateOffer && (
          <CreateOffer PercelID={percelID} Handlestatus={setShowCreateOffer} />
        )}
        <table className="Dashboard_content_table">
          <thead>
            <tr>
              <th>Num</th>
              <th>Request details</th>
              <th>Estimated pick-up</th>
              <th>Estimated drop-off</th>
              <th>Status</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {AppData.percels?.map(
              (
                {
                  name,
                  dropoff_address,
                  pickup_address,
                  status,
                  pickupTime,
                  deliveryTime,
                  _id,
                },
                index
              ) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="Dashboard_content_table_request-details">
                      <p>
                        <span>percel name: </span>
                        {name}
                      </p>
                      <p>
                        <span>pickup address: </span>
                        {pickup_address}
                      </p>
                      <p>
                        <span>drop off address: </span>
                        {dropoff_address}
                      </p>
                    </div>
                  </td>
                  <td>
                    {pickupTime
                      ? new Date(pickupTime).toDateString()
                      : "_______________"}
                  </td>
                  <td>
                    {deliveryTime
                      ? new Date(deliveryTime).toDateString()
                      : "_______________"}
                  </td>
                  <td
                    className={`Dashboard_content_table_request-status Dashboard_content_table_request-status_${status}`}
                  >
                    <span>{status}</span>
                  </td>
                  <td>
                    <button
                      className="btn-primary"
                      onClick={() => HanndelTakeIt(_id)}
                    >
                      Take it
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <section className="Dashboard">
      <Navbar />
      <div className="container">
        <div className="Dashboard_content">
          {AppData.percels && AppData.percels.length ? (
            cookies.get("user").isShipper ? (
              <ShipperTable />
            ) : (
              <CarrierTable />
            )
          ) : AppData.isLoading ? (
            <p>Loading....</p>
          ) : (
            <p className="Dashboard_content_empty">
              Click on "Create New Shipment" to create a new transport request
              and start receiving offers.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
