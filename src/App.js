import React, { useEffect, useState } from "react";
import {
  Route, Routes} from "react-router-dom";
import ReactGA from "react-ga" 
import Home from './pages/Home'
import Articles from './pages/Articles'
import Navbar from './components/Navbar'
import Back from "./pages/Back";
//import scrollreveal from "scrollreveal";

const TRACKING_ID = "G-2CX41MV2S4"  //TRACKING_ID
ReactGA.initialize(TRACKING_ID)

export default function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    ReactGA.preview(window.location.pathname)
   
  }, []);
  return (
      <div  data-theme={theme} className="app-container">
           <Navbar changeTheme={changeTheme} currentTheme={theme} />

      <Routes>
					<Route  path="/articles" element={<Articles />} />
					<Route  path="/back-to-basics" element={<Back />} />
          <Route  path="/" element={<Home />} />
				</Routes>
        </div>
  );
}
