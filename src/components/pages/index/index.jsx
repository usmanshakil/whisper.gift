import React, { useState } from "react";
import "./style.css"
import NavBar from "../../../_partials/navbar";
import Footer from "../../../_partials/footer";
import Hero from "../hero/hero";
import TwoColumWithImageAndText from "../twoColumWithImageAndText/twoColumWithImageAndText";
import RowWithThreeCard from "../rowWithThreeCard/rowWithThreeCard";
import CustomerStisfaction from "../customerStisfaction/customerStisfaction";
import DownloadSection from "../downloadSection/downloadSection";
import Mymodal from "../modal/modal";
import FAQ from "../faq/faq";

const Index = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      {openModal ? <Mymodal openModal={openModal} setOpenModal={setOpenModal} /> : ""}
      <NavBar />
      <Hero />
      <TwoColumWithImageAndText openModal={setOpenModal} />
      <RowWithThreeCard />
      <CustomerStisfaction />
      <FAQ />
      <DownloadSection />
      <Footer />
    </div>

  );
};
export default Index;

