import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function DoughnutChartDia({
  co2FromTrees = 0,
  co2FromSoil = 0,
  co2SavedFromEnergy = 0,
  fertilizerEmissions = 0,
}) {
  // Absolute values (Doughnut cannot handle negatives)
  const data = [
    { name: "Trees", value: co2FromTrees / 1000 },
    { name: "Soil", value: co2FromSoil / 1000 },
    { name: "Energy", value: Math.max(0, co2SavedFromEnergy / 1000) },
    { name: "Fertilizer", value: fertilizerEmissions / 1000 },
  ];

  const COLORS = ["#2a9d8f", "#4cc9f0", "#90dbf4", "#e63946"];

  // % labels
  const renderLabel = ({ percent }) => `${(percent * 100).toFixed(0)}%`;

  // Net CO2 for center text
  const netCO2 =
    (co2FromTrees + co2FromSoil + co2SavedFromEnergy - fertilizerEmissions) /
    1000;

  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="55%" // 👈 makes it doughnut
          outerRadius="75%"
          paddingAngle={4} // 👈 gap between slices
          cornerRadius={10} // 👈 rounded edges
          label={renderLabel}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        {/* Center text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "14px", fontWeight: "600" }}
        >
          {netCO2.toFixed(2)} t CO₂
        </text>

        <Tooltip formatter={(v) => `${v.toFixed(2)} t CO₂`} />
        <Legend verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
}
