import { useState } from "react";
import "./styles/DynamicFarmDetails.css";

export default function DynamicFarmDetails({ onChange }) {
  const [inputCount, setInputCount] = useState("");
  const [farms, setFarms] = useState([]);

  const handleInputChange = (e) => setInputCount(e.target.value);

  const handleContinue = () => {
    const count = parseInt(inputCount, 10);

    if (isNaN(count) || count <= 0) {
      alert("Please enter a valid number of farms");
      return;
    }

    if (count > 12) {
      alert("Maximum 12 farms are allowed");
      return;
    }

    const initialFarms = Array.from({ length: count }, () => ({
      contactPerson: "",
      address: "",
      phone: "",
      email: "",
      cropName: "",
      cropType: "",
      location: "",
    }));

    setFarms(initialFarms);
    onChange?.(initialFarms);
  };

  const handleFarmChange = (index, field, value) => {
    const updatedFarms = [...farms];
    updatedFarms[index][field] = value;
    setFarms(updatedFarms);
    onChange?.(updatedFarms);
  };

  return (
    <section className="farm-container">
      <div className="input-group">
        <h3 className="farm-title">Your Farm Details</h3>
        <label>Number of Farms</label>
        <input
          type="number"
          min="0"
          max="20"
          value={inputCount}
          onChange={handleInputChange}
          placeholder="Enter number of farms"
        />

        <button type="button" onClick={handleContinue} className="continue-btn">
          Continue
        </button>
      </div>

      <div className="farmCard-container">
        {farms.map((farm, index) => (
          <div key={index} className="farm-card">
            <h4>Farm {index + 1}</h4>

            <div className="field">
              <label>Farm Name</label>
              <input
                type="text"
                value={farm.cropName}
                onChange={(e) =>
                  handleFarmChange(index, "cropName", e.target.value)
                }
                placeholder="Enter farm name"
              />
            </div>

            <div className="field">
              <label>Farm Type</label>
              <input
                type="text"
                value={farm.cropType}
                onChange={(e) =>
                  handleFarmChange(index, "cropType", e.target.value)
                }
                placeholder="Enter farm type"
              />
            </div>

            <div className="field">
              <label>Location of Farm</label>
              <input
                type="text"
                value={farm.location}
                onChange={(e) =>
                  handleFarmChange(index, "location", e.target.value)
                }
                placeholder="Enter location"
              />
            </div>

            <div className="field">
              <label>Contact Person Name</label>
              <input
                type="text"
                value={farm.contactPerson}
                onChange={(e) =>
                  handleFarmChange(index, "contactPerson", e.target.value)
                }
                placeholder="Coordinator name"
              />
            </div>

            <div className="inline-fields">
              <div className="field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={farm.phone}
                  onChange={(e) =>
                    handleFarmChange(index, "phone", e.target.value)
                  }
                  placeholder="Enter number"
                />
              </div>

              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  value={farm.email}
                  onChange={(e) =>
                    handleFarmChange(index, "email", e.target.value)
                  }
                  placeholder="Enter email"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
