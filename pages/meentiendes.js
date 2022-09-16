import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Speech from "../components/Speech";

import MeSection from "../components/MeSection";

function meentiendes() {
  return (
    <div className="bg-bgbody2">
      <Header />

      <MeSection />
      <Speech />

      <Footer />
    </div>
  );
}

export default meentiendes;
