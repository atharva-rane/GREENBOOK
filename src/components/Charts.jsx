import BarChartDia from "./BarChartDia";
import DoughnutChartDia from "./DoughnutChartDia";
import "../styles/Charts.css";

export default function Charts({
  co2FromTrees,
  co2FromSoil,
  co2SavedFromEnergy,
  fertilizerEmissions,
}) {
  return (
    <div className="chart-box">
      <div className="barChart">
        <BarChartDia
          co2FromTrees={co2FromTrees}
          co2FromSoil={co2FromSoil}
          co2SavedFromEnergy={co2SavedFromEnergy}
          fertilizerEmissions={fertilizerEmissions}
        />
      </div>
      <div className="doughnutChart">
        <DoughnutChartDia
          co2FromTrees={co2FromTrees}
          co2FromSoil={co2FromSoil}
          co2SavedFromEnergy={co2SavedFromEnergy}
          fertilizerEmissions={fertilizerEmissions}
        />
      </div>
    </div>
  );
}
