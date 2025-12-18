import Select from "react-select";
import "../styles/Stage1.css";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Stage1() {
  let navigate = useNavigate();

  const { unionData, setUnionData } = useOutletContext();

  const handleChange = (e) => {
    setUnionData({ ...unionData, [e.target.name]: e.target.value });
  };

  const handleRegType = (selected) => {
    setUnionData({ ...unionData, registrationType: selected.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/union-page/stage2");
    console.log(unionData);
  };

  return (
    <div className="stage1-container">
      <h2>Union Identity</h2>
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Union / FPO Name:</label>
          <input
            type="text"
            name="unionName"
            value={unionData.unionName}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Registration Type:</label>
          <Select
            options={[
              { value: "FPO", label: "FPO" },
              { value: "Cooperative Society", label: "Cooperative Society" },
              { value: "Trust", label: "Trust" },
              { value: "Producer Company", label: "Producer Company" },
            ]}
            placeholder="Select Registration Type"
            value={
              unionData.registrationType
                ? {
                    value: unionData.registrationType,
                    label: unionData.registrationType,
                  }
                : null
            }
            onChange={handleRegType}
            className="select"
          />
        </div>

        <div className="form-field">
          <label>Registration Number:</label>
          <input
            type="text"
            name="registrationNumber"
            value={unionData.registrationNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={unionData.state}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>District:</label>
          <input
            type="text"
            name="district"
            value={unionData.district}
            onChange={handleChange}
          />
        </div>

        <div className="form-btn">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
          <button type="submit">Submit & Next</button>
        </div>
      </form>
    </div>
  );
}
