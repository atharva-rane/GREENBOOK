import React from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { dashboardHandler, getDashboardData, groupRequest } from "../api/api.jsx";
import Navbar from "./Navbar";
import HomeCalculateCard from "./HomeCalculateCard";
import UnionCard from "./UnionCard";
import "../styles/HomeCard.css";
import "../styles/UnionsDashboard.css";

export default function FarmerDashboard() {
    const [userData, setUserData] = React.useState(null);
    const [subscriber, setSubscriber] = React.useState(0);
    const [unions, setUnions] = React.useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (subscriber > 0) {
            const data = getDashboardData();
            console.log("Farmer Dashboard data received:", data);
            setUserData(data);
            if (data.status && data.status !== 200) {
                // Handle error case
                console.error("Error fetching dashboard data:", data.status);
                if (data.status === 401) {
                    // Redirect to login page or take appropriate action
                    navigate("/login");
                }
            } else {
                // Handle success case
                console.log("Dashboard data fetched successfully");
                if (data.type !== "FARMER") {
                    // Redirect if not a farmer
                    navigate("/login"); 
                } else {
                    console.log(data);
                    if ("farmerInfo" in data === false) {
                        return;
                    }
                    let paths = [];
                    let forms = [];
                    for (let i = 0; i < data.farmerInfo.unions.length; i++) {
                        paths.push("/auth/unions/" + data.farmerInfo.unions[i]);
                        forms.push({});
                    }
                    groupRequest(paths, forms, setUnions);
                }
            }
        }
    }, [subscriber]);

    useEffect(() => {
        // Fetch dashboard data on component mount
        dashboardHandler({}, setSubscriber);
    }, []);

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="calculate-container">
          <div className="calculate-box">
            <HomeCalculateCard />
          </div>
        </div>

        {userData && (
          <div className="dashboard-info">
            <h3>My Unions</h3>
            {unions && unions.length > 0 ? (
              <div className="dashboard-container">
                {unions.map((union, index) => (
                  <UnionCard
                    key={union?._id ?? `${index}-${union?.unionName ?? "union"}`}
                    union={union}
                  />
                ))}
              </div>
            ) : (
              <p></p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
