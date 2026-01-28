import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import DynamicFarmDetails from "./DynamicFarmDetails";
import "./styles/VerifiedFarmer.css";

export default function VerifiedFarmer() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // show the popup

    // redirect after 2.5 seconds
    setTimeout(() => {
      navigate("/"); // adjust path as needed
    }, 2500);
  };

  return (
    <div className="verifiedFarmerPage">
      <Navbar />

      <div className="verifiedFarmerContainer">
        <h2 className="verifiedFarmerTitle">Project Information Sheet</h2>

        <form className="verifiedFarmerForm" onSubmit={handleSubmit}>
          {/* ---------------- Project Details ---------------- */}
          <section className="projectSection">
            <h3 className="sectionHeading">Project Details</h3>

            <label className="formLabel">
              Project Name
              <input
                className="formInput"
                type="text"
                placeholder="Enter project name"
                required
                defaultValue="Green Book"
              />
            </label>

            <label className="formLabel">
              Main Project Activities
              <textarea
                className="formTextarea"
                placeholder="Describe project activities"
              />
            </label>

            <div className="inlineFieldGroup">
              <label className="formLabel">
                Version of Document
                <input
                  className="formInput"
                  type="text"
                  defaultValue="Version 1.0"
                />
              </label>

              <label className="formLabel">
                Date of Submission
                <input className="formInput" type="date" />
              </label>
            </div>
          </section>

          {/* ---------------- Company Details ---------------- */}
          <section className="projectSection">
            <h3 className="sectionHeading">Company / Organization Details</h3>

            <label className="formLabel">
              Company Name
              <input
                className="formInput"
                type="text"
                placeholder="Company name"
                required
                defaultValue="Headen Marx"
              />
            </label>

            <label className="formLabel">
              Address
              <input
                className="formInput"
                type="text"
                placeholder="Enter full address"
              />
            </label>

            <div className="inlineFieldGroup">
              <label className="formLabel">
                Contact Number
                <input
                  className="formInput"
                  type="number"
                  placeholder="Enter number"
                  required
                  defaultValue="9536547899"
                />
              </label>

              <label className="formLabel">
                Email
                <input
                  className="formInput"
                  type="email"
                  placeholder="Enter email"
                  defaultValue="headenmarx@gmail.com"
                />
              </label>
            </div>
          </section>

          {/* ---------------- Coordinator Details ---------------- */}
          <section className="projectSection">
            <h3 className="sectionHeading">
              Project Coordinator (Person Managing This Program)
            </h3>

            <label className="formLabel">
              Coordinator Name
              <input
                className="formInput"
                type="text"
                placeholder="Coordinator name"
                required
                defaultValue="Vedavid"
              />
            </label>

            <div className="inlineFieldGroup">
              <label className="formLabel">
                Contact Number
                <input
                  className="formInput"
                  type="number"
                  placeholder="Enter number"
                  required
                  defaultValue="9875648598"
                />
              </label>

              <label className="formLabel">
                Email
                <input
                  className="formInput"
                  type="email"
                  placeholder="Enter email"
                  defaultValue="vedavid@gmail.com"
                />
              </label>
            </div>
          </section>

          {/* ---------------- VVB Details ---------------- */}
          <section className="projectSection">
            <h3 className="sectionHeading">
              Validation & Verification Body (VVB)
            </h3>

            <label className="formLabel">
              Organization Name
              <input
                className="formInput"
                type="text"
                placeholder="Organization name"
                required
                defaultValue="Farmers Wealth"
              />
            </label>

            <label className="formLabel">
              Organization Address
              <input
                className="formInput"
                type="text"
                placeholder="Organization address"
              />
            </label>

            <div className="inlineFieldGroup">
              <label className="formLabel">
                Contact Number
                <input
                  className="formInput"
                  type="number"
                  placeholder="Enter number"
                  required
                  defaultValue="9685423654"
                />
              </label>

              <label className="formLabel">
                Email
                <input
                  className="formInput"
                  type="email"
                  placeholder="Enter email"
                />
              </label>
            </div>
          </section>

          {/* ---------------- Farms ---------------- */}
          <div className="farmDetailsWrapper">
            <DynamicFarmDetails />
          </div>

          {/* ---------------- Submit Button ---------------- */}
          <button type="submit" className="submitProjectButton">
            Submit Project Details
          </button>
        </form>

        {/* ---------------- Popup ---------------- */}
        {showPopup && (
          <div className="verificationPopupOverlay">
            <div className="verificationPopup">
              <h3>Thank You! ✅</h3>
              <p>
                Thank you for listing your farm.
                <br />
                Your farm has been listed.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
