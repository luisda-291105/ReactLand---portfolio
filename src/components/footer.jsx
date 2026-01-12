function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <span className="logo-text">ReactLand</span>
            </div>
            <p className="footer-description">
              Landing page moderna y dinámica diseñada para implementación en
              React.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-github" />
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin" />
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-discord" />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#features">Características</a>
              </li>
              <li>
                <a href="#testimonials">Testimonios</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Recursos</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Documentación</a>
              </li>
              <li>
                <a href="#">Ejemplos</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Soporte</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Términos de uso</a>
              </li>
              <li>
                <a href="#">Política de privacidad</a>
              </li>
              <li>
                <a href="#">Licencia</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 ReactLand. Todos los derechos reservados.</p>
          <p>
            Diseñado con <i className="fas fa-heart" /> para la comunidad de
            React.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
