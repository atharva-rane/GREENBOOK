export function calculateCarbonCredits({
  numberOfTrees,
  farmSize,
  cropType,
  fertilizerUsage,
  energyUse,
  energyHours,
}) {
  // Convert inputs to numbers (safety)
  numberOfTrees = Number(numberOfTrees);
  farmSize = Number(farmSize);
  energyHours = Number(energyHours);

  // 1️⃣ Trees CO2 capture (kg)
  const co2FromTrees = numberOfTrees * 22;

  // 2️⃣ Soil CO2 capture (kg)
  let soilFactorPerHa = 0;
  if (cropType === "conventional") soilFactorPerHa = 0.5;
  else if (cropType === "organic") soilFactorPerHa = 1;
  else if (cropType === "regenerative") soilFactorPerHa = 1.8;

  const co2FromSoil = farmSize * soilFactorPerHa * 1000;

  // 3️⃣ Fertilizer emissions (kg) — MUST SUBTRACT
  let fertFactorPerHa = 0;
  if (fertilizerUsage === "high") fertFactorPerHa = 0.2;
  else if (fertilizerUsage === "medium") fertFactorPerHa = 0.35;
  else if (fertilizerUsage === "low") fertFactorPerHa = 0.5;

  const fertilizerEmissions = farmSize * fertFactorPerHa * 1000;

  // 4️⃣ Energy savings (if solar/biogas)
  let co2SavedFromEnergy = 0;
  if (energyUse === "solar" || energyUse === "biogas") {
    co2SavedFromEnergy = energyHours * 0.7; // kg saved
  } else if (energyUse === "diesel") {
    co2SavedFromEnergy = energyHours * -2.68;
  } else if (energyUse === "manual") {
    co2SavedFromEnergy = energyHours * 0;
  }

  // 5️⃣ FINAL TOTAL (kg)
  const totalCO2Kg =
    co2FromTrees + co2FromSoil + co2SavedFromEnergy - fertilizerEmissions; // SUBTRACT HERE

  // 6️⃣ Total carbon credits (tonnes)
  const totalCredits = Math.max(0, totalCO2Kg / 1000);

  // 7️⃣ Earnings (₹)
  const minEarning = totalCredits * 300;
  const maxEarning = totalCredits * 800;

  return {
    co2FromTrees,
    co2FromSoil,
    fertilizerEmissions,
    co2SavedFromEnergy,
    totalCO2Kg,
    totalCredits,
    minEarning,
    maxEarning,
  };
}
