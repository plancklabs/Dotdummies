import React, { useEffect, useState } from "react";
import {
  Route, Routes} from "react-router-dom";
import Home from './pages/Home'
import Articles from './pages/Articles'
import Navbar from './components/Navbar'
import Back from "./pages/Back";
//import scrollreveal from "scrollreveal";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    // const registerAnimations = () => {
    //   const sr = scrollreveal({
    //     origin: "bottom",
    //     distance: "80px",
    //     duration: 2000,
    //     reset: false,
    //   });
    //   sr.reveal(
    //     `
    //     nav,
    //     .home,
    //     .super-rare,
    //     footer
    // `,
    //     {
    //       interval: 500,
    //     }
    //   );
    // };
    //registerAnimations();
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