import Card from "./Card";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import avatar6 from "../assets/avatar6.png";
import bridge from "../assets/bridge.png";
import "../styles/InfoCards.css";
import Navbar from "./Navbar";

let cardData = [
  {
    img: avatar1,
    title: "What Is a Carbon Credit?",
    desc: "A carbon credit equals 1 ton of CO₂ reduced or removed. Farmers earn these credits through eco-friendly practices, and they can sell them for extra income.",
  },
  {
    img: avatar2,
    title: "Why Do Carbon Credits Exist?",
    desc: "Industries can’t remove all their pollution, so they buy carbon credits to offset it. This creates a system where reducing carbon becomes profitable.",
  },
  {
    img: avatar3,
    title: "How Farmers Earn Credits?",
    desc: "Farmers earn credits by planting trees, using organic methods, reducing fertilizer, improving soil carbon, and using solar or biogas—actions that cut or store CO₂.",
  },
  {
    img: avatar4,
    title: "Who Buys Carbon Credits?",
    desc: "Airlines, tech firms, automakers, and global climate groups buy carbon credits to meet their net-zero and sustainability goals.",
  },
  {
    img: avatar5,
    title: "How Carbon Credits Are Sold?",
    desc: "Farmers register their project, get carbon measured, receive approval, and sell credits in the market. In India, each credit sells for about ₹300–₹800.",
  },
  {
    img: avatar6,
    title: "Why Carbon Credits Matter for Farmers?",
    desc: "They provide yearly extra income, improve soil health, and boost productivity. Small sustainable steps today lead to better profits tomorrow.",
  },
];

export default function InfoCard() {
  return (
    <div>
      <Navbar />
      <div className="carbonCredit-container">
        <div className="infoCard-container">
          <Card cardData={cardData} />
        </div>
        <div className="role">
          <h2>Our Role with your Carbon Credits</h2>
          <div className="role-img">
            <img src={bridge} alt="" />
          </div>
          <div className="role-content">
            <ul>
              <li>
                We accurately record and manage your carbon credits on our
                secure digital platform, ensuring all your efforts are properly
                documented.
              </li>
              <br />
              <li>
                We verify your credits according to trusted standards, giving
                buyers confidence in their authenticity and impact.
              </li>
              <br />
              <li>
                We provide a seamless marketplace for your credits, connecting
                you with corporate and industrial buyers ready to trade.
              </li>
              <br />
              <li>
                We facilitate the entire trading process, making it easy,
                transparent, and fair for both farmers and buyers.
              </li>
              <br />
              <li>
                We help you unlock the full value of your sustainable farming
                practices while supporting global sustainability goals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
