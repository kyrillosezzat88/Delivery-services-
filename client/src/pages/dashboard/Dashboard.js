import { useState } from "react";
import { CreateOffer, Navbar } from "../../components";
import "./Dashboard.scss";
const Dashboard = () => {
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
          <tr>
            <td>1</td>
            <td>
              <div className="Dashboard_content_table_request-details">
                <p>
                  <span>percel name: </span>test
                </p>
                <p>
                  <span>pickup address: </span>test
                </p>
                <p>
                  <span>drop off address: </span>test
                </p>
              </div>
            </td>
            <td>_______________</td>
            <td> _______________</td>
            <td>_______________</td>
            <td className="Dashboard_content_table_request-status Dashboard_content_table_request-status_waiting">
              <span>waiting</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const CarrierTable = () => {
    const [showCreateOffer, setShowCreateOffer] = useState(true);
    return (
      <>
        {showCreateOffer && <CreateOffer Handlestatus={setShowCreateOffer} />}
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
            <tr>
              <td>1</td>
              <td>
                <div className="Dashboard_content_table_request-details">
                  <p>
                    <span>percel name: </span>test
                  </p>
                  <p>
                    <span>pickup address: </span>test
                  </p>
                  <p>
                    <span>drop off address: </span>test
                  </p>
                </div>
              </td>
              <td> WED DEC 14 2022</td>
              <td> WED DEC 14 2022</td>
              <td className="Dashboard_content_table_request-status Dashboard_content_table_request-status_waiting">
                <span>waiting</span>
              </td>
              <td>
                <button
                  className="btn-primary"
                  onClick={() => setShowCreateOffer(true)}
                >
                  Take it{" "}
                </button>
              </td>
            </tr>
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
          <CarrierTable />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
