import { useNavigate, useOutletContext } from "react-router-dom";
import "../styles/Stage4.css";
import axios from "axios";
import toast from "react-hot-toast";

export default function Stage4() {
  let navigate = useNavigate();
  const { unionData, setUnionData } = useOutletContext();
  const baseUrl = "https://greenbook-backend.vercel.app/api";

  const handleChange = (e) => {
    setUnionData({ ...unionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("email");
    const sessionId = localStorage.getItem("sessionId");
    const useAuthRoute = Boolean(email && sessionId);
    const endpoint = useAuthRoute ? `${baseUrl}/auth/union` : `${baseUrl}/union`;
    const payload = useAuthRoute
      ? { ...unionData, email, sessionId }
      : unionData;

    try {
      const response = await axios.post(endpoint, payload);
      console.log("Union submitted:", response.data);
      toast.success(response.data.message, { position: "top-right" });
      navigate("/dashboard");
    } catch (err) {
      console.log("Error:", err);
    }
    console.log(unionData);
  };

  return (
    <div className="stage4-container">
      <h2>Pricing & Contact</h2>
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Min Price per Credit:</label>
          <input
            type="number"
            name="minPricePerCredit"
            value={unionData.minPricePerCredit}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Max Price per Credit:</label>
          <input
            type="number"
            name="maxPricePerCredit"
            value={unionData.maxPricePerCredit}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Contact Name:</label>
          <input
            type="text"
            name="contactName"
            value={unionData.contactName}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={unionData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-btn">
          <button type="button" onClick={() => navigate("/union-page/stage3")}>
            Back
          </button>
          <button type="submit">Submit & Display Credit</button>
        </div>
      </form>
    </div>
  );
}
