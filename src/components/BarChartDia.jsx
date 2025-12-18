import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function BarChartDia({
  co2FromTrees,
  co2FromSoil,
  co2SavedFromEnergy,
  fertilizerEmissions,
}) {
  const data = [
    { name: "Trees", value: co2FromTrees / 1000 },
    { name: "Soil", value: co2FromSoil / 1000 },
    { name: "Energy", value: co2SavedFromEnergy / 1000 },
    { name: "Fertilizer", value: -fertilizerEmissions / 1000 },
  ];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(value) => value.toFixed(2)}
          label={{
            value: "CO₂ (tonnes)",
            angle: -90,
            position: "insideLeft",
            dx: -19,
            dy: 45,
          }}
        />
        <Tooltip formatter={(v) => `${v.toFixed(2)} tonnes CO₂`} />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar
          dataKey="value"
          label={{
            position: "top",
            formatter: (v) => `${v.toFixed(2)} t`,
          }}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.value >= 0 ? "#2a9d8f" : "#e63946"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
