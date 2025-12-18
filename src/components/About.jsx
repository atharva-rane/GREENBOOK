import Navbar from "./Navbar";
import mission from "../assets/mission.png";
import aboutUs from "../assets/aboutUs.jpg";
import "../styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="">
      <Navbar />
      <div className="about-container">
        <div className="aboutUs" data-aos="fade-down-right">
          <div className="aboutUs-img">
            <img src={aboutUs} alt="" />
          </div>
          <div className="about-content">
            <div className="about-title">About Us</div>
            <div className="about-text">
              <p>
                We are building a digital platform that simplifies the
                management of farmer unions and sustainability projects. Our
                goal is to provide a transparent, reliable, and user-friendly
                system for handling registrations, verification status, and
                project data. Using modern web technologies, we aim to improve
                efficiency, accessibility, and trust across the ecosystem while
                supporting future scalability and growth.
              </p>
            </div>
          </div>
        </div>
        <div className="mission" data-aos="fade-up-left">
          <div className="about-content">
            <div className="about-title">Mission</div>
            <div className="about-text">
              <p>
                Our mission is to create a transparent and efficient digital
                platform that simplifies the management of farmer unions and
                sustainability projects. We aim to empower organizations with
                accurate data, easy access, and scalable technology to support
                sustainable growth and informed decision-making.
              </p>
            </div>
          </div>
          <div className="mission-img">
            <img src={mission} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
