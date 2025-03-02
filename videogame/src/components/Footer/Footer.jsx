import "./Footer.css"

function Footer() {
  return (
    <>
      <img src="/images/Tabuu.png" id="tabuu" />
      <div className="footer-main">
        <p>© 2023 MANGO Todos los derechos reservados.</p>
        <p>
          <a href="/policyconditions">Política de Privacidad, Cookies y Condiciones de Venta</a>
        </p>
        <p>Desarrollado por: <a href="https://github.com/jasanchez97" target="_blank">jasanchez97</a></p>
        <div>
          <img className="footer-img" src="./images/GithubLogo.png" href="https://github.com/jasanchez97" />
        </div>
      </div>
    </>
  )
}

export default Footer