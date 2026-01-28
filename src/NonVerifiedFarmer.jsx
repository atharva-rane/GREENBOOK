import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/NonVerifiedFarmer.css";

export default function NonVerifiedFarmer() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);

    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <div className="nonVerifiedFarmerPage">
      <Navbar />

      <div className="nonVerifiedFarmerContainer">
        <h2 className="nonVerifiedFarmerTitle">
          Non-Verified Farmer Registration
        </h2>

        {/* 🔹 ADDED onSubmit */}
        <form className="nonVerifiedFarmerForm" onSubmit={handleSubmit}>
          {/* Personal Details */}
          <section className="nonVerifiedFarmerSection">
            <h3 className="nonVerifiedFarmerSectionHeading">
              Personal Details
            </h3>

            <label className="nonVerifiedFarmerLabel">
              Full Name
              <input
                className="nonVerifiedFarmerInput"
                type="text"
                placeholder="Enter full name"
                required
                defaultValue="Green Book"
              />
            </label>

            <div className="nonVerifiedFarmerInlineGroup">
              <label className="nonVerifiedFarmerLabel">
                Mobile Number
                <input
                  className="nonVerifiedFarmerInput"
                  type="tel"
                  placeholder="Enter mobile number"
                  required
                  defaultValue="9833668475"
                />
              </label>

              <label className="nonVerifiedFarmerLabel">
                Alternate Mobile Number
                <input
                  className="nonVerifiedFarmerInput"
                  type="tel"
                  placeholder="Enter alternate number (optional)"
                />
              </label>
            </div>

            <label className="nonVerifiedFarmerLabel">
              Email
              <input
                className="nonVerifiedFarmerInput"
                type="email"
                placeholder="Enter email"
              />
            </label>
          </section>

          {/* Location Details */}
          <section className="nonVerifiedFarmerSection">
            <h3 className="nonVerifiedFarmerSectionHeading">
              Location Details
            </h3>

            <div className="nonVerifiedFarmerInlineGroup">
              <label className="nonVerifiedFarmerLabel">
                State
                <input
                  className="nonVerifiedFarmerInput"
                  type="text"
                  placeholder="Enter state"
                  required
                  defaultValue="Maharashtra"
                />
              </label>

              <label className="nonVerifiedFarmerLabel">
                District
                <input
                  className="nonVerifiedFarmerInput"
                  type="text"
                  placeholder="Enter district"
                  required
                  defaultValue="Kudal"
                />
              </label>
            </div>

            <div className="nonVerifiedFarmerInlineGroup">
              <label className="nonVerifiedFarmerLabel">
                Village / Town
                <input
                  className="nonVerifiedFarmerInput"
                  type="text"
                  placeholder="Enter village or town"
                />
              </label>

              <label className="nonVerifiedFarmerLabel">
                Pincode
                <input
                  className="nonVerifiedFarmerInput"
                  type="text"
                  placeholder="Enter pincode"
                  required
                  defaultValue="416520"
                />
              </label>
            </div>
          </section>

          {/* Land Information */}
          <section className="nonVerifiedFarmerSection">
            <h3 className="nonVerifiedFarmerSectionHeading">
              Land Information
            </h3>

            <label className="nonVerifiedFarmerLabel">
              Number of Land Farm
              <input
                className="nonVerifiedFarmerInput"
                type="number"
                required
                defaultValue="6"
              />
            </label>

            <label className="nonVerifiedFarmerLabel">
              Total Land Area (acres/hectares)
              <input
                className="nonVerifiedFarmerInput"
                type="text"
                defaultValue="72"
              />
            </label>

            <label className="nonVerifiedFarmerLabel">
              Land Type
              <select className="nonVerifiedFarmerInput" required>
                <option value="">Select type</option>
                <option value="agricultural">Agricultural</option>
                <option value="horticulture">Horticulture</option>
                <option value="mixed">Mixed</option>
              </select>
            </label>
          </section>

          {/* Consent */}
          <section className="nonVerifiedFarmerSection">
            <label className="nonVerifiedFarmerConsentLabel">
              <input type="checkbox" required />I confirm that the above details
              are correct and agree to be contacted.
            </label>
          </section>

          <button type="submit" className="nonVerifiedFarmerSubmitButton">
            Submit Details
          </button>
        </form>
      </div>

      {/* ✅ ADDED POPUP */}
      {showPopup && (
        <div className="verificationPopupOverlay">
          <div className="verificationPopup">
            <h3>Verification Request Sent ✅</h3>
            <p>
              Our team will reach out to you soon!
              <br />
              Thank you for engaging with us.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
