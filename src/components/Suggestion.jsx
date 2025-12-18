import { generateSuggestions } from "../helper/GenerateSuggestion";
import "../styles/Suggestion.css";
import crop from "../assets/crop.jpg";
import fertilizerUsage from "../assets/fertilizerUsage.png";
import energySource from "../assets/energySource.png";
import energyHours from "../assets/energyHours.jpg";
import trees1 from "../assets/trees1.png";

const icons = [trees1, crop, fertilizerUsage, energySource, energyHours];

export default function Suggestion({
  numberOfTrees,
  farmSize,
  cropType,
  fertilizerUsage,
  energyUse,
  energyHours,
}) {
  const suggestions = generateSuggestions({
    numberOfTrees,
    farmSize,
    cropType,
    fertilizerUsage,
    energyUse,
    energyHours,
  });

  return (
    <div className="suggestion-container">
      <h1>Smart Steps to Boost Your Carbon Credits</h1>
      <div className="suggestion-box">
        {suggestions.map((item, index) => (
          <div key={index} className="item">
            <img src={icons[index]} alt="icon" className="icon" />
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
