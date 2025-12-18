import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/HomeKnowMoreCard.css";
import KnowMoreImage from "./KnowMoreImage";
import { useEffect } from "react";

export default function HomeKnowMoreCard() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  });
  return (
    <div className="knowMore-container">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="image"
      >
        <KnowMoreImage />
      </div>
    </div>
  );
}
