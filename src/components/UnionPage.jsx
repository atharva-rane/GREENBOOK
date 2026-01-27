import "../styles/UnionPage.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function UnionPage() {
  const [unionData, setUnionData] = useState({
    unionName: "",
    registrationType: "Cooperative Society",
    registrationNumber: "",
    state: "Maharashtra",
    district: "Chiplun",
    verificationStandard: "Indian Carbon Market (ICM)",
    verificationStatus: "Verified",
    projectID: "GBU-PROJ-2025",
    vintageYear: "2025",
    totalVerifiedCredits: "2400",
    creditsAvailableForSale: "2200",
    creditType: "Removal",
    minPricePerCredit: "3500",
    maxPricePerCredit: "5000",
    contactName: "Green Book",
    email: "greenbook@gmail.com",
  });

  return (
    <div className="unionPage-container">
      <h1>Union Carbon Credit Verification & Listing</h1>

      {/* Shared state for ALL stages */}
      <Outlet context={{ unionData, setUnionData }} />
    </div>
  );
}
