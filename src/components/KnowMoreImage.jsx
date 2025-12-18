import nnewCalculateCard from "../assets/nnewCalculateCard.png";
import { useNavigate } from "react-router-dom";
import "../styles/KnowMoreImage.css";
import farmland from "../assets/farmland.jpg";

export default function KnowMoreImage() {
  const navigate = useNavigate();
  return (
    <div className="knowImage-container">
      <div className="message-box">
        <img src={farmland} alt="" />
        <div className="overlay"></div>
        <div className="message-content">
          <p>
            Carbon credits represent measured and verified emission reductions
          </p>
          <p>Calculated values are indicative, not certificates</p>
          <p>Verification is mandatory to sell credits</p>
          <p>Union / FPO aggregation lowers verification cost</p>
          <p>Market price depends on quality, verification & demand</p>
          <button
            onClick={() => navigate("/carbon-credits")}
            className="knowMore-btn"
          >
            Know More
          </button>
        </div>
      </div>
      <div className="knowImage-box">
        <div className="image-box">
          <img src={nnewCalculateCard} alt="Calculate Card" />
        </div>
        <div className="knowMore-items">
          <h2 className="knowMore-h2">Carbon Credits</h2>
        </div>
      </div>
    </div>
  );
}
