import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/HomeKnowMoreCard.css";
import KnowMoreImage from "./KnowMoreImage";
import { useEffect } from "react";

export default function HomeKnowMoreCard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="knowMore-container">
      <div data-aos="fade-up-right" className="image">
        <KnowMoreImage />
      </div>
    </div>
  );
}
