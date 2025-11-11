import React from "react";
import Header from "../components/Header";
import ButtonsSection from "../components/ButtonsSection";
import IconsSection from "../components/IconsSection";
import ProductsList from "../components/ProductsList";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import whatsappIcon from "../assets/img/whatsapp.png";

const HomePage = () => {
  return (
    <>
      <Header />
      <ButtonsSection />
      <IconsSection />
      <ProductsList />
      <Testimonials />
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://w.app/mar_de_soles"
        target="_blank"
        id="whatsapp-link"
        rel="noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" id="whatsapp-icon" />
      </a>
    </>
  );
};

export default HomePage;
