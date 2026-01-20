import Navbar from "./Navbar";
import UnionCard from "./UnionCard";
import "../styles/UnionsDashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./Loading";
import Companies from "./Companies";

export default function CorporateDashboard() {
  const [unions, setUnions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const email = localStorage.getItem("email");
      const sessionId = localStorage.getItem("sessionId");

      if (!email || !sessionId) {
        navigate("/login");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post(
          "https://greenbook-backend.vercel.app/api/auth/unions",
          { email, sessionId }
        );

        setUnions(
          Array.isArray(response.data)
            ? response.data
            : response.data.unions || []
        );
      } catch (error) {
        console.log("Error fetching unions:", error);
        if ([401, 403].includes(error?.response?.status)) {
          navigate("/login");
        }
        setUnions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

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
      <Companies />
    </div>
  );
}
