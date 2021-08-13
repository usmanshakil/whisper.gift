import React from "react";
import NavBar from "../../../_partials/navbar";
import Footer from "../../../_partials/footer";
import Hero2 from "../hero2/hero2";
import ThankyouBody from "../thankyouBody/thankyouBody";
const Thankyou = () => {


  return (
    <div>
      <NavBar />
      <Hero2 title1={"Thank"} title2={" you"} />
      <ThankyouBody />
      <Footer />
    </div>

  );
};
export default Thankyou;

