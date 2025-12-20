import "../styles/UnionCard.css";
import farmerUnion from "../assets/farmerUnion.png";
import { useNavigate } from "react-router-dom";

export default function UnionCard({ union }) {
  let navigate = useNavigate();
  let handleViewButton = () => {
    navigate(`/union-information/${union._id}`);
  };
  return (
    <>
      <div className="unionCard-container">
        <div className="farmer-image">
          <img src={farmerUnion} alt="" />
        </div>
        <div className="unionContent">
          <h3 className="unionName">{union.unionName}</h3>
          <div className="contentBox">
            <h3>
              <span>State:</span> {union.state}
            </h3>
            <h3>
              <span>District:</span> {union.district}
            </h3>
            <h3>
              <span>Credits Available:</span> {union.creditsAvailableForSale}
            </h3>
            <h3>
              <span>Vintage Year:</span> {union.vintageYear}
            </h3>
          </div>
          <div className="viewBtn">
            <button onClick={handleViewButton}>View Details</button>
          </div>
        </div>
        <div className="date">
          <h5>
            {" "}
            {new Date(union.createdAt).toLocaleString("en-IN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </h5>
        </div>
      </div>
    </>
  );
}
