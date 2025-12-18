import image from "../assets/image.png";
import { useEffect, useState } from "react";
import "../styles/HomeImage.css";

export default function Home() {
  const texts = [
    "Individual farmers and farmer unions together create measurable climate impact.",
    "Your land captures real CO₂ — we help calculate, verify, and represent its value.",
    "From individual farms to united communities, every sustainable action matters.",
    "Farmer unions bring strength to climate-smart agriculture — backed by data.",
    "Measure carbon impact, verify practices, and unlock value for farmers and unions.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="image-container">
      <img src={image} alt="nature" />
      <div className="overlay">
        <h2>Empowering Farmers & Farmer Unions</h2>
        <p className="changing-text">{texts[index]}</p>
      </div>
    </div>
  );
}
