import "../styles/UnionDrawer.css";
import Navbar from "./Navbar";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

const steps = ["Stage 1", "Stage 2", "Stage 3", "Stage 4"];

export default function UnionDrawer() {
  const location = useLocation();

  // ✅ RECEIVE context from UnionPage
  const context = useOutletContext();

  const buttonRefs = useRef([]);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  const getActiveStep = () => {
    if (location.pathname.includes("stage2")) return 2;
    if (location.pathname.includes("stage3")) return 3;
    if (location.pathname.includes("stage4")) return 4;
    return 1;
  };

  const activeStep = getActiveStep();

  useEffect(() => {
    const activeBtn = buttonRefs.current[activeStep - 1];
    if (activeBtn) {
      setIndicatorPosition(activeBtn.offsetLeft);
      setIndicatorWidth(activeBtn.offsetWidth);
    }
  }, [activeStep]);

  return (
    <>
      <Navbar />

      <div className="drawer-container">
        <div className="drawer-buttons">
          {steps.map((step, idx) => (
            <button
              key={idx}
              disabled
              className={`drawer-step ${
                activeStep === idx + 1 ? "active-step" : ""
              }`}
              ref={(el) => (buttonRefs.current[idx] = el)}
            >
              {step}
            </button>
          ))}

          <div
            className="active-indicator"
            style={{
              left: indicatorPosition,
              width: indicatorWidth,
            }}
          />
        </div>

        <div className="drawer-content">
          {/* ✅ FORWARD CONTEXT */}
          <Outlet context={context} />
        </div>
      </div>
    </>
  );
}
