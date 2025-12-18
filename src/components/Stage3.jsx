import { useState } from "react";
import Select from "react-select";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../styles/Stage3.css";

export default function Stage3() {
  let navigate = useNavigate();
  const { unionData, setUnionData } = useOutletContext();

  const creditTypeArr = [
    { value: "Removal", label: "Removal" },
    { value: "Avoidance", label: "Avoidance" },
  ];

  const handleChange = (e) => {
    setUnionData({ ...unionData, [e.target.name]: e.target.value });
  };

  const handleCreditsType = (selected) => {
    setUnionData({ ...unionData, creditType: selected.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/union-page/stage4");
    console.log(unionData);
  };

  return (
    <div className="stage3-container">
      <h2>Credit Availability</h2>
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Vintage Year:</label>
          <input
            type="number"
            name="vintageYear"
            value={unionData.vintageYear}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Total Verified Credits:</label>
          <input
            type="number"
            name="totalVerifiedCredits"
            value={unionData.totalVerifiedCredits}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Credits Available for Sale:</label>
          <input
            type="number"
            name="creditsAvailableForSale"
            value={unionData.creditsAvailableForSale}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Credit Type:</label>
          <Select
            options={creditTypeArr}
            value={
              unionData.creditType
                ? { value: unionData.creditType, label: unionData.creditType }
                : null
            }
            onChange={handleCreditsType}
            className="select"
          />
        </div>

        <div className="form-btn">
          <button type="button" onClick={() => navigate("/union-page/stage2")}>
            Back
          </button>
          <button type="submit">Submit & Next</button>
        </div>
      </form>
    </div>
  );
}
