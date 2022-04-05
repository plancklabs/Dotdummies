import React from "react";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SuperRare from "../components/SuperRare";
import "../sass/index.scss";
function Home() {

  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div >
      <ScrollToTop />
      <SuperRare />
      <Footer />
    </div>
  );
}

export default Home;
