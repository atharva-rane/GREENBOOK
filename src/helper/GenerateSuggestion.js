export function generateSuggestions({
  numberOfTrees,
  farmSize,
  cropType,
  fertilizerUsage,
  energyUse,
  energyHours,
}) {
  numberOfTrees = Number(numberOfTrees);
  farmSize = Number(farmSize);
  energyHours = Number(energyHours);

  const suggestions = [];

  // 🌳 Trees
  // 🌳 Trees (correct now)
  if (numberOfTrees >= farmSize * 50) {
    suggestions.push(
      "You have good tree coverage. Maintain and protect existing trees."
    );
  } else {
    suggestions.push(
      "Increase tree plantation (agroforestry) to boost carbon absorption."
    );
  }

  // 🌱 Crop type
  if (cropType === "regenerative") {
    suggestions.push(
      "Regenerative farming is excellent for long-term soil carbon storage."
    );
  } else if (cropType === "organic") {
    suggestions.push(
      "Organic farming is beneficial; shifting to regenerative practices can increase soil carbon further."
    );
  } else {
    suggestions.push(
      "Switching to organic or regenerative farming can significantly improve soil carbon sequestration."
    );
  }

  // 🧪 Fertilizer
  if (fertilizerUsage === "low") {
    suggestions.push(
      "Low chemical fertilizer usage reduces emissions. Keep using sustainable inputs."
    );
  } else if (fertilizerUsage === "medium") {
    suggestions.push("Reducing fertilizer usage further can lower emissions.");
  } else if (fertilizerUsage === "high") {
    suggestions.push(
      "High fertilizer usage increases emissions. Consider organic alternatives."
    );
  }

  // ⚡ Energy source
  if (energyUse === "solar" || energyUse === "biogas") {
    suggestions.push(
      "Using renewable energy helps reduce farm-related carbon emissions."
    );
  } else {
    suggestions.push(
      "Switching to solar or biogas energy can significantly reduce CO₂ emissions."
    );
  }

  // ⏱ Energy hours
  if ((energyUse === "solar" || energyUse === "biogas") && energyHours >= 4) {
    suggestions.push(
      "Good renewable energy usage hours. Consistent use maximizes carbon savings."
    );
  } else if (energyUse === "solar" || energyUse === "biogas") {
    suggestions.push(
      "Increasing renewable energy usage hours can further increase carbon savings."
    );
  }

  return suggestions;
}
