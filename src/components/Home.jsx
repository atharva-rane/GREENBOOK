import "../styles/Home.css";
import Navbar from "./Navbar";
import HomeCard from "./HomeCard";
import HomeImage from "./HomeImage";
import Slider from "./Slider";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <HomeImage />
      <HomeCard />
      <br />
      <br />

      <Slider />
    </div>
  );
}
