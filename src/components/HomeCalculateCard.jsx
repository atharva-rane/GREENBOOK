import "../styles/HomeCalculateCard.css";
import { useNavigate } from "react-router-dom";

export default function HomeCalculateCard() {
  const navigate = useNavigate();
  return (
    <div className="card-container">
      <div className="column left">
        <div className="card">
          <h1>Calculate Individual</h1>
          <button onClick={() => navigate("/calculation-page")}>
            Calculate
          </button>
        </div>
        <div className="info">
          <p>
            Get an estimate of your farm’s carbon footprint and potential carbon
            credits based on trees, crops, fertilizer, and energy usage.
          </p>
          <p>This is an estimation only and does not include verification.</p>
        </div>
      </div>

      <div className="line"></div>

      <div className="column right">
        <div className="card">
          <h1>Add Union</h1>
          <button onClick={() => navigate("/union-page")}>Add</button>
        </div>
        <div className="info">
          <p>
            View and display already verified carbon credits from a Union or FPO
            for selling to buyers.
          </p>
          <p>
            Union verification reduces cost and enables better selling prices.
          </p>
        </div>
      </div>
    </div>
  );
}
