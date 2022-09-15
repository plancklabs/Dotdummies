import React, {useState } from "react";
import {
  Route, Routes} from "react-router-dom";
import ReactGA from "react-ga" 
import Home from './pages/Home'
import Articles from './pages/Articles'
import Navbar from './components/Navbar'
import Back from "./pages/Back";
import { JsonLd } from "react-schemaorg";


const TRACKING_ID = "G-2CX41MV2S4"  //TRACKING_ID
ReactGA.initialize(TRACKING_ID)

export default function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  // useEffect(() => {
  //   ReactGA.preview(window.location.pathname)
   
  // }, []);

  // https://schema.org/Article

  return (
      <div  data-theme={theme} className="app-container">
           <Navbar changeTheme={changeTheme} currentTheme={theme} />
      
      <Routes>
					<Route  path="/articles" element={<Articles />} />
					<Route  path="/back-to-basics" element={<Back />} />
          <Route  path="/" element={<Home />} />
				</Routes>
        <JsonLd
      item={{
        "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.dotfordummies.com"
          },
          "headline": "Dot for Dummies",
          "description": "A Comprehensive Reading List for Polkadot",
          "image": "https://imgur.com/b0zS5K4.png",  
          "author": {
            "@type": "Organization",
            "name": "Dot for Dummies",
            "url": "https://imgur.com/b0zS5K4.png"
          },  
          "publisher": {
            "@type": "Organization",
            "name": "Dot for Dummies",
            "logo": {
              "@type": "ImageObject",
              "url": "https://imgur.com/b0zS5K4.png"
            }
          },
          "datePublished": "2022-09-09",
          "dateModified": "2022-09-09"
        
      }}
    />
        </div>
  );
}
