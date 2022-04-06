import React from "react";
import Footer from "../components/Footer";
import Free from "../components/Free";
import Back from "../components/Back"
import Deep from "../components/Deep"
import Hero from "../components/Home";
import ScrollToTop from "../components/ScrollToTop";
import Latest from "../components/Latest"
import "../sass/index.scss";

function Home() {

  return (
   <>    
      <Hero />

      <ScrollToTop />
      
      {/* <Hero /> */}
      <Latest/>
      <Free />
      <Back/>
      <br></br>
      <Deep/>
      <Free />
      <Footer />
      </>

  );
}

export default Home;
