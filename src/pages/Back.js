import React from "react";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "../sass/index.scss";
import Back from "../components/Back";
function Home() {
  return (
    <>
      <ScrollToTop />
      <div className="back-to-basics-container">
      <Back />
      </div>
      <Footer />
      </>
  );
}

export default Home;
