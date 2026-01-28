import { useState } from "react";
import "./styles/FarmerVerificationDrawer.css";
import { useNavigate } from "react-router-dom";

export default function FarmerVerificationDrawer() {
  const [activeTab, setActiveTab] = useState("verified"); // "verified" or "nonVerified"
  const navigate = useNavigate();

  return (
    <div className="verification-container">
      {/* Tabs */}
      <div className="tab-container">
        <div
          className={`tab ${activeTab === "verified" ? "active" : ""}`}
          onClick={() => setActiveTab("verified")}
        >
          Verified
        </div>
        <div
          className={`tab ${activeTab === "nonVerified" ? "active" : ""}`}
          onClick={() => setActiveTab("nonVerified")}
        >
          Non-Verified
        </div>

        {/* Smooth moving underline */}
        <div
          className="tab-underline"
          style={{
            transform:
              activeTab === "verified" ? "translateX(0%)" : "translateX(100%)",
          }}
        />
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "verified" ? (
          <>
            <p>
              <span className="boldSpan">Step 1:</span> Select your verified
              farm.
            </p>
            <p>
              <span className="boldSpan">Step 2:</span> Fill in your farm
              details.
            </p>
            <p>
              <span className="boldSpan">Step 3:</span> Submit to list your
              farm.
            </p>
            <>
              <button
                onClick={() => {
                  navigate("/verified-farmer");
                }}
              >
                List Farm
              </button>
            </>
          </>
        ) : (
          <>
            <p>
              <span className="boldSpan">Step 1:</span> Add basic farm details.
            </p>
            <p>
              <span className="boldSpan">Step 2:</span> Our team will contact
              you.
            </p>
            <p>
              <span className="boldSpan">Step 3:</span> Farm verification and
              listing.
            </p>
            <>
              <button
                onClick={() => {
                  navigate("/non-verified-farmer");
                }}
              >
                Apply for Verification
              </button>
            </>
          </>
        )}
      </div>
    </div>
  );
}
