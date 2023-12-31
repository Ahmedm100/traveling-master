import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/Heroimage";
import Footer from "../components/Footer";
import TrainingSection from "../components/Training";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="FAQ" text="Frequently Asked Questions" />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;
