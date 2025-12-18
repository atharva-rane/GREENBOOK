import Navbar from "./Navbar";
import UnionCard from "./UnionCard";
import "../styles/UnionsDashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function UnionsDashboard() {
  let [unions, setUnions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://greenbook-backend.vercel.app/api/unions"
        );
        setUnions(
          Array.isArray(response.data)
            ? response.data
            : response.data.unions || []
        );
      } catch (error) {
        console.log("Error fetching unions:", error);
        setUnions([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        {Array.isArray(unions) &&
          unions.map((union) => <UnionCard key={union._id} union={union} />)}
      </div>
    </div>
  );
}
