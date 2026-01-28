import "../styles/Home.css";
import Navbar from "./Navbar";
import HomeCard from "./HomeCard";
import HomeImage from "./HomeImage";
import Slider from "./Slider";
import SingleFarmerCard from "../SingleFarmerCard";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <HomeImage />
      <SingleFarmerCard />
      <HomeCard />
      <br />
      <br />

      <Slider />
    </div>
  );
}
