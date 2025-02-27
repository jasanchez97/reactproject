import { useState, useCallback } from "react";
import "./Header.css";
import useSound from "use-sound";
import WiiMenuBanner from "../sounds/WiiMenuBanner.mp3";
import MainScreenSound from "../sounds/MainScreenSound.mp3";

function Header() {
  const [smashLogo, setSmashLogo] = useState("/images/SmashLogo.png");
  const [playSound] = useSound(WiiMenuBanner, { volume: 0.3 });
  const [playSound2] = useSound(MainScreenSound, { volume: 0.3 });

  const handleMouseEnter = () => {
    setSmashLogo("/images/SmashLogoMouseIn.png");
    playSound();
  };

  const handleMouseOut = () => {
    setSmashLogo("/images/SmashLogo.png");
  };

  // Aseguramos que clickButton siempre tenga acceso a playSound2
  const clickButton = (event, url) => {
    event.preventDefault(); // Evita la navegación inmediata
    playSound2(); // Reproduce el sonido

    setTimeout(() => {
      window.location.href = url; // Redirige después del retardo
    }, 1500);
  };

  return (
    <div className="header-main">
      <img
        className="header-logo"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseOut}
        src={smashLogo}
        id="header-logo"
        alt="Smash Logo"
      />
      <div className="header-buttons">
        <a href="/home" className="header-button" onClick={(e) => clickButton(e, "/home")}>Inicio</a>
        <a href="/information" className="header-button" onClick={(e) => clickButton(e, "/information")}>Información</a>
        <a href="/gallery" className="header-button" onClick={(e) => clickButton(e, "/gallery")}>Galería</a>
      </div>
    </div>
  );
}

export default Header;
