import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";
import company7 from "../assets/company7.png";
import company8 from "../assets/company8.png";
import company9 from "../assets/company9.png";
import "../styles/Companies.css";

const companies = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
  company9,
];

export default function Companies() {
  return (
    <div className="companies-container">
      <h2>Companies Tied with Us</h2>

      <div className="companies-slider">
        <div className="track">
          {[...companies, ...companies].map((company, index) => (
            <div className="company" key={index}>
              <img src={company} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
