import { useState } from "react";
import Select from "react-select";
import "../styles/Calculation.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { calculateCarbonCredits } from "../helper/CalculateCO";
import Suggestion from "./Suggestion";
import Result from "./Result";
import Charts from "./Charts";

export default function Calculation() {
  const [farmSize, setFarmSize] = useState("");
  const [trees, setTrees] = useState("");
  const [cropType, setCropType] = useState("");
  const [fertilizerUsage, setFertilizerUsage] = useState("");
  const [energyUsage, setEnergyUsage] = useState("");
  const [energyHrs, setEnergyHrs] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [showAddUnionBtn, setShowAddUnionBtn] = useState(false);

  let navigate = useNavigate();

  const cropTypes = [
    { value: "conventional", label: "conventional" },
    { value: "organic", label: "organic" },
    { value: "regenerative", label: "regenerative" },
  ];
  const fertilizerUse = [
    { value: "high", label: "high" },
    { value: "medium", label: "medium" },
    { value: "low", label: "low" },
  ];
  const energyUse = [
    { value: "manual", label: "manual" },
    { value: "solar", label: "solar" },
    { value: "biogas", label: "biogas" },
    { value: "diesel", label: "diesel" },
  ];

  let handleFarmSize = (e) => {
    setFarmSize(() => {
      return e.target.value;
    });
  };

  let handleTrees = (e) => {
    setTrees(() => {
      return e.target.value;
    });
  };

  let handleCropType = (e) => {
    setCropType(() => {
      return e.value;
    });
  };

  let handleFertilizerUsage = (e) => {
    setFertilizerUsage(() => {
      return e.value;
    });
  };

  let handleEnergyUsage = (e) => {
    setEnergyUsage(() => {
      return e.value;
    });
  };

  let handleEnergyHours = (e) => {
    setEnergyHrs(() => {
      return e.target.value;
    });
  };

  let handleCalculate = (e) => {
    e.preventDefault();
    // setTotalCO2KG(trees * 22);
    // const totalCO2Tonnes = ((trees * 22) / 1000).toFixed(3);
    // setTonnes(totalCO2Tonnes);
    console.log(
      calculateCarbonCredits({
        numberOfTrees: trees,
        farmSize: farmSize,
        cropType: cropType,
        fertilizerUsage: fertilizerUsage,
        energyUse: energyUsage,
        energyHours: energyHrs,
      })
    );
    setResult(
      calculateCarbonCredits({
        numberOfTrees: trees,
        farmSize: farmSize,
        cropType: cropType,
        fertilizerUsage: fertilizerUsage,
        energyUse: energyUsage,
        energyHours: energyHrs,
      })
    );
    setShowResult(true);
    setShowCharts(true);
    setShowSuggestions(true);
    setShowAddUnionBtn(true);
  };

  let handleAddUnionBtn = () => {
    navigate("/union-page");
  };

  return (
    <div className="main-calcContainer">
      <Navbar />
      <div>
        <div className="container">
          <form onSubmit={handleCalculate} className="form-grid">
            <div className="form-field">
              <label>Enter Farm size (Ha):</label>
              <input
                type="number"
                className="inputBox"
                onChange={handleFarmSize}
                value={farmSize}
              />
            </div>

            <div className="form-field">
              <label>Enter no. of Trees:</label>
              <input
                type="number"
                className="inputBox"
                onChange={handleTrees}
                value={trees}
              />
            </div>

            <div className="form-field">
              <label>Crop Type:</label>
              <Select
                options={cropTypes}
                className="selectBox"
                placeholder="Select Crop Type"
                onChange={handleCropType}
              />
            </div>

            <div className="form-field">
              <label>Fertilizer Usage:</label>
              <Select
                options={fertilizerUse}
                className="selectBox"
                placeholder="Select Fertilizer Usage"
                onChange={handleFertilizerUsage}
              />
            </div>

            <div className="form-field">
              <label>Energy Usage:</label>
              <Select
                options={energyUse}
                className="selectBox"
                placeholder="Select Energy Usage"
                onChange={handleEnergyUsage}
              />
            </div>

            <div className="form-field">
              <label>Energy Hours (PA):</label>
              <input
                type="number"
                className="inputBox energy-inputBox"
                onChange={handleEnergyHours}
                value={energyHrs}
              />
            </div>

            <div className="form-btn">
              <button type="submit">Calculate</button>
            </div>
          </form>
        </div>

        {showResult && (
          <Result
            totalCredits={result.totalCredits}
            minimumEarning={result.minEarning}
            maximumEarning={result.maxEarning}
          />
        )}
      </div>

      <div>
        {showCharts && (
          <Charts
            co2FromTrees={result.co2FromTrees}
            co2FromSoil={result.co2FromSoil}
            co2SavedFromEnergy={result.co2SavedFromEnergy}
            fertilizerEmissions={result.fertilizerEmissions}
          />
        )}
      </div>

      <div>
        {showSuggestions && (
          <Suggestion
            numberOfTrees={trees}
            farmSize={farmSize}
            cropType={cropType}
            fertilizerUsage={fertilizerUsage}
            energyUse={energyUsage}
            energyHours={energyHrs}
          />
        )}
      </div>
      <div className="addUnionBtn">
        {showAddUnionBtn && (
          <button onClick={handleAddUnionBtn}>Add Your Union</button>
        )}
      </div>
    </div>
  );
}
