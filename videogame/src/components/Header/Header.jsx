import { useState } from "react";
import "./Header.css";
import useSound from "use-sound";
import WiiMenuBanner from "../sounds/WiiMenuBanner.mp3";

function Header() {
  const [smashLogo, setSmashLogo] = useState("/images/SmashLogo.png");

  const handleMouseEnter = () => {
    setSmashLogo("/images/SmashLogoMouseIn.png");
    playSound();
  };

  const handleMouseOut = () => {
    setSmashLogo("/images/SmashLogo.png");
  };

  const [playSound] = useSound(WiiMenuBanner, { volume: 0.3 });

  return (
    <div className="header-main">
      <img className="header-logo" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} src={smashLogo} id="header-logo" alt="Smash Logo" />
      <div className="header-buttons">
        <a href="/home" className="header-button">Inicio</a>
        <a href="/information" className="header-button">Información</a>
        <a href="/gallery" className="header-button">Galería</a>
      </div>
    </div>
  );
}

export default Header;
