import "./Footer.css"

function Footer() {
  return (
    <>
      <img src="/images/misc/Tabuu.png" id="tabuu" />
      <div className="footer-main">
        <p>© 2023 SSBB Corporation Todos los derechos reservados.</p>
        <p>
          <a href="/policyconditions">Política de Privacidad, Cookies y Condiciones de Venta</a>
        </p>
        <p>Desarrollado por: <a href="https://github.com/jasanchez97" target="_blank">jasanchez97</a></p>
          <img className="footer-img" src="./images/misc/GithubLogo.png" />
      </div>
    </>
  )
}

export default Footer