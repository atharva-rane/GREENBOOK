import CalculationPage from "./components/CalculationPage";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import UnionPage from "./components/UnionPage";
import UnionDrawer from "./components/UnionDrawer";
import Stage1 from "./components/Stage1";
import Stage2 from "./components/Stage2";
import Stage3 from "./components/Stage3";
import Stage4 from "./components/Stage4";
import Dashboard from "./components/Dashboard";
import InfoCard from "./components/InfoCards";
import { Toaster } from "react-hot-toast";
import UnionInfo from "./components/UnionInfo";

function App() {
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculation-page" element={<CalculationPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carbon-credits" element={<InfoCard />} />
        <Route path="/union-page" element={<UnionPage />}>
          <Route element={<UnionDrawer />}>
            <Route index element={<Stage1 />} />
            <Route path="stage1" element={<Stage1 />} />
            <Route path="stage2" element={<Stage2 />} />
            <Route path="stage3" element={<Stage3 />} />
            <Route path="stage4" element={<Stage4 />} />
          </Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/union-information/:id" element={<UnionInfo />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
