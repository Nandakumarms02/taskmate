import { useEffect, useState } from "react";
import Logo from "../assets/logo1.png";

export const Header = () => {
  const [theme,setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  },[theme])



  return (
   <header>
    <div className="logo">
        <img src={Logo} alt="Taskmate logo" />
        <span>Taskmate</span>
    </div>
    <div className="themeSelector">
        <span onClick={() => setTheme("light")} className="light"></span>
        <span onClick={() => setTheme("medium")} className="medium"></span>
        <span onClick={() => setTheme("dark")} className="dark"></span>
        <span onClick={() => setTheme("gradientOne")} className="gradientOne"></span>
        <span onClick={() => setTheme("gradientTwo")} className="gradientTwo"></span>
        <span onClick={() => setTheme("gradientThree")} className="gradientThree"></span>
        
    </div>
   </header>
  )
}
