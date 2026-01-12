
export default function Header() {
    return (
      <header className="header">
        <div className="container">
            <nav className="navbar">
                <div className="logo">
                    <span className="logo-text">ReactLand - portfolio</span>
                </div>
                <ul className="nav-menu">
                    <li><a href="#home" className="nav-link active">Inicio</a></li>
                    <li><a href="#features" className="nav-link">Características</a></li>
                    <li><a href="#testimonials" className="nav-link">Testimonios</a></li>
                    <li><a href="#contacto" className="nav-link">Contacto</a></li>
                </ul>
                <div className="theme-toggle">
                    <i className="fas fa-sun"></i>
                </div>
                <div className="hamburger">
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </div>
            </nav>
        </div>
      </header>
    );
}
