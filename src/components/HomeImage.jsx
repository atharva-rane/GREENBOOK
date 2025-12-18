import image from "../assets/image.png";
import { useEffect, useState } from "react";
import "../styles/HomeImage.css";

export default function Home() {
  const texts = [
    "Your climate-smart farming practices capture real CO₂ — and that impact deserves to be measured.",
    "Your sustainable farming efforts are creating real environmental value.",
    "Every eco-friendly action on your farm contributes to a healthier planet.",
    "Regenerative farming doesn’t just grow crops — it captures carbon.",
    "Your soil and trees absorb CO₂ every day — discover how much.",
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
        <h2>Discover the Power of Your Land</h2>
        <p className="changing-text">{texts[index]}</p>
      </div>
    </div>
  );
}
