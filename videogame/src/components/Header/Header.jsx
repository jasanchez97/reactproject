import "./Header.css"

function Header() {
  return (
    <>
      <div className="header-main">
        <img className="header-logo" src="./images/SmashLogo.png" />
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