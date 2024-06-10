import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import TCMAcupuncture from "../Components/TCMAcupuncture/TCMAcupuncture";
import AuricularAcupunctuer from "../Components/TCMAcupuncture/AuricularAcupunctuer";
import MasterTungsAcupuncture from "../Components/TCMAcupuncture/MasterTungsAcupuncture";
import CuppingTherapy from "../Components/TCMAcupuncture/CuppingTherapy";
import SujokTherapy from "../Components/TCMAcupuncture/SujokTherapy";
import PNSTherapy from "../Components/TCMAcupuncture/PNSTherapy";
import Moxibustion from "../Components/TCMAcupuncture/Moxibustion";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";

function RoutesLayout() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tcmacupuncture" element={<TCMAcupuncture />} />
          <Route
            path="/auricularacupuncture"
            element={<AuricularAcupunctuer />}
          />
          <Route
            path="/mastertungsacupuncture"
            element={<MasterTungsAcupuncture />}
          />
          <Route path="/cuppingtherapy" element={<CuppingTherapy />} />
          <Route path="/sujoktherapy" element={<SujokTherapy />} />
          <Route path="/pnsttherapy" element={<PNSTherapy />} />
          <Route path="/moxibustion" element={<Moxibustion />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default RoutesLayout;
