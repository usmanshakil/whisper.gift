import React from "react";
import NavBar from "../../../_partials/navbar";
import Footer from "../../../_partials/footer";
import DownloadSection from "../downloadSection/downloadSection";
import Hero2 from "../hero2/hero2";
import HowItWorkSteps from "../howItWorkSteps/howItWorkSteps";

const HowItWork = () => {


  return (
    <div>
      <NavBar />
      <Hero2 title1={"How it Works"} title2={"- Gift Anyone."} />
      <HowItWorkSteps />
      <DownloadSection />
      <Footer />
    </div>

  );
};
export default HowItWork;

