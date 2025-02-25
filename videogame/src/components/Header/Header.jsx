import { useState } from "react";
import "./Header.css"


function Header() {
  const [smashLogo, setSmashLogo] = useState("images/SmashLogo.png")

  const handleMouseEnter = () => {
    setSmashLogo("images/SmashLogoMouseIn.png");
  }

  const handleMouseOut = () => {
    setSmashLogo("images/SmashLogo.png");
  }

  return (
    <>
      <div className="header-main">
          <img className="header-logo" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} src={smashLogo} id="header-logo" />
          <div className="header-buttons">
            <a href="/home" className="header-button">Inicio</a>
            <a href="/information" className="header-button">Información</a>
            <a href="/gallery" className="header-button">Galería</a>
          </div>
      </div>
    </>
  )
}

export default Header