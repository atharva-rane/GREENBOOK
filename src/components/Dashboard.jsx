import Navbar from "./Navbar";
import UnionCard from "./UnionCard";
import "../styles/UnionsDashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./Loading";

export default function UnionsDashboard() {
  const [unions, setUnions] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) return <Loading data="Dashboard" />;

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        {unions.map((union) => (
          <UnionCard key={union._id} union={union} />
        ))}
      </div>
    </div>
  );
}
