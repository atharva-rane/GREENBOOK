import "../styles/Result.css";
import creditPoint from "../assets/creditPoint.png";
import minEarning from "../assets/minEarning.png";
import maxEarning from "../assets/maxEarning.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

export default function Result({
  totalCredits,
  minimumEarning,
  maximumEarning,
}) {
  return (
    <div>
      <h1>Your Green Choices Have Real Returns</h1>
      <div className="result-grid">
        <div className="result-grid-inner">
          <img src={creditPoint} alt="" />
          <div className="result-field">
            <p>Total Credits </p>
            <p>{totalCredits} </p>
          </div>
        </div>
        <div className="result-grid-inner">
          <img src={minEarning} alt="" />
          <div className="result-field">
            <p>Min Earnings </p>
            <p>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              {totalCredits ? minimumEarning.toFixed(2) : " "}{" "}
            </p>
          </div>
        </div>
        <div className="result-grid-inner">
          <img src={maxEarning} alt="" />
          <div className="result-field">
            <p>Max Earnings </p>
            <p>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              {totalCredits ? maximumEarning.toFixed(2) : " "}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
