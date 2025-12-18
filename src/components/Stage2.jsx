import { useState } from "react";
import Select from "react-select";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../styles/Stage2.css";

export default function Stage2() {
  let navigate = useNavigate();
  const { unionData, setUnionData } = useOutletContext();

  const verificationStds = [
    { value: "Verra (VCS)", label: "Verra (VCS)" },
    { value: "Gold Standard (GS)", label: "Gold Standard (GS)" },
    {
      value: "Indian Carbon Market (ICM)",
      label: "Indian Carbon Market (ICM)",
    },
    {
      value: "Climate Action Reserve (CAR)",
      label: "Climate Action Reserve (CAR)",
    },
    {
      value: "American Carbon Registry (ACR)",
      label: "American Carbon Registry (ACR)",
    },
    {
      value: "Global Carbon Council (GCC)",
      label: "Global Carbon Council (GCC)",
    },
    { value: "Plan Vivo", label: "Plan Vivo" },
  ];

  let verificationStatus = [
    { value: "Verified", label: "Verified" },
    { value: "Pending", label: "Pending" },
    { value: "Rejected", label: "Rejected" },
  ];

  const handleChange = (e) => {
    setUnionData({ ...unionData, [e.target.name]: e.target.value });
  };

  const handleVerifStds = (selected) => {
    setUnionData({ ...unionData, verificationStandard: selected.value });
  };

  const handleVerifStatus = (selected) => {
    setUnionData({ ...unionData, verificationStatus: selected.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/union-page/stage3");
    console.log(unionData);
  };

  return (
    <div className="stage2-container">
      <h2>Verification Proof</h2>
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Verification Standard:</label>
          <Select
            options={verificationStds}
            value={
              unionData.verificationStandard
                ? {
                    value: unionData.verificationStandard,
                    label: unionData.verificationStandard,
                  }
                : null
            }
            onChange={handleVerifStds}
            className="select"
          />
        </div>

        <div className="form-field">
          <label>Verification Status:</label>
          <Select
            options={verificationStatus}
            value={
              unionData.verificationStatus
                ? {
                    value: unionData.verificationStatus,
                    label: unionData.verificationStatus,
                  }
                : null
            }
            onChange={handleVerifStatus}
            className="select"
          />
        </div>

        <div className="form-field">
          <label>Project / Program ID:</label>
          <input
            type="text"
            name="projectID"
            value={unionData.projectID}
            onChange={handleChange}
          />
        </div>

        <div className="form-btn">
          <button type="button" onClick={() => navigate("/union-page/stage1")}>
            Back
          </button>
          <button type="submit">Submit & Next</button>
        </div>
      </form>
    </div>
  );
}
