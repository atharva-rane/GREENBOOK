import { useNavigate } from "react-router-dom";
import "./styles/SingleFarmerCard.css";
import singleFarmer2 from "./assets/singleFarmer2.jpg";
import FarmerVerificationDrawer from "./FarmerVerificationDrawer";

export default function SingleFarmerCard() {
  const navigate = useNavigate();

  return (
    <div className="single-farmer-container">
      <div className="left-section">
        <img
          src={singleFarmer2}
          alt="Single Farmer"
          className="singleFarmerImg"
        />
      </div>

      <div className="right-section">
        <div className="right-content">
          <h2>Single Farmer</h2>
          <div className="singleFarmerInfo">
            <p>
              Grow green, earn more – list your farm and unlock carbon credits
              and extra income.
            </p>
          </div>

          <FarmerVerificationDrawer />

          {/* <button onClick={() => navigate("/single-farmer")}>
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
}
