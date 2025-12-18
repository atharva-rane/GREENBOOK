import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import farmerUnion from "../assets/farmerUnion.png";
import "../styles/UnionInfo.css";

export default function UnionInfo() {
  const { id } = useParams();
  const [union, setUnion] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://greenbook-indol.vercel.app/api/unions/${id}`)
      .then((res) => setUnion(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!union) return <p>Loading...</p>;

  const deleteUser = async () => {
    try {
      await axios.delete(
        `https://greenbook-indol.vercel.app/api/delete/union/${id}`
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Error deleting union:", error);
    }
  };

  return (
    <div className="mainContainer">
      <Navbar />

      <div className="infoContainer">
        <h3 className="name">{union.unionName}</h3>

        <div className="farmerImage">
          <img src={farmerUnion} alt="farmer" />
        </div>

        <div className="unionInformation">
          <div className="identity-box">
            <h3>
              <span>Union / FPO Name:</span> {union.unionName}
            </h3>
            <h3>
              <span>Registration Type: </span>
              {union.registrationType}
            </h3>
            <h3>
              <span>Registration Number:</span> {union.registrationNumber}
            </h3>
            <h3>
              <span>State:</span> {union.state}
            </h3>
            <h3>
              <span>District:</span> {union.district}
            </h3>
          </div>

          <div className="identity-box">
            <h3>
              <span>Verification Standard:</span> {union.verificationStandard}
            </h3>
            <h3>
              <span>Verification Status:</span> {union.verificationStatus}
            </h3>
            <h3>
              <span>Project ID:</span> {union.projectID}
            </h3>
          </div>

          <div className="identity-box">
            <h3>
              <span>Vintage Year:</span> {union.vintageYear}
            </h3>
            <h3>
              <span>Total Verified Credits:</span> {union.totalVerifiedCredits}
            </h3>
            <h3>
              <span>Credits Available: </span>
              {union.creditsAvailableForSale}
            </h3>
            <h3>
              <span>Credit Type:</span> {union.creditType}
            </h3>
          </div>

          <div className="identity-box">
            <h3>
              <span>Min Price:</span> {union.minPricePerCredit}
            </h3>
            <h3>
              <span>Max Price:</span> {union.maxPricePerCredit}
            </h3>
            <h3>
              <span>Contact Name:</span> {union.contactName}
            </h3>
            <h3>
              <span>Email:</span> {union.email}
            </h3>
          </div>
        </div>
        <div className="btns">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="backBtn"
          >
            Back
          </button>
          <button className="deleteBtn" onClick={deleteUser}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
