import { useNavigate } from "react-router-dom";
import "../styles/HomeCard.css";
import HomeCalculateCard from "./HomeCalculateCard";
import HomeKnowMoreCard from "./HomeKnowMoreCard";

export default function HomeCard() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="calculate-container">
        <div className="calculate-box">
          <HomeCalculateCard />
        </div>
      </div>
      <div className="knowMore-box">
        <HomeKnowMoreCard />
      </div>
    </div>
  );
}
