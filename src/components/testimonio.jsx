export default function Testimonios() {
    return (
        <section className="testimonials" id="testimonials">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Lo que dicen nuestros usuarios</h2>
                <p className="section-subtitle">Desarrolladores que ya implementaron este diseño.</p>
            </div>
            <div className="testimonials-slider">
                <div className="testimonial-card active">
                    <div className="testimonial-content">
                        <p className="testimonial-text">"Esta landing page me ahorró semanas de desarrollo. El código es limpio y fácil de personalizar para mis proyectos de React."</p>
                    </div>
                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="author-info">
                            <h4 className="author-name">María González</h4>
                            <p className="author-title">Frontend Developer</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-content">
                        <p className="testimonial-text">"Las animaciones sutiles y el diseño responsive hacen que esta plantilla destaque sobre otras. Muy recomendable."</p>
                    </div>
                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="author-info">
                            <h4 className="author-name">Carlos Rodríguez</h4>
                            <p className="author-title">UI/UX Designer</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="testimonial-content">
                        <p className="testimonial-text">"Implementé esta landing para un cliente y quedó encantado. El tiempo de carga es excelente y la conversión mejoró un 30%."</p>
                    </div>
                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="author-info">
                            <h4 className="author-name">Ana Martínez</h4>
                            <p className="author-title">Full Stack Developer</p>
                        </div>
                    </div>
                </div>
                <div className="slider-controls">
                    <button className="slider-btn prev-btn">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className="slider-dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <button className="slider-btn next-btn">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
      </section>

    )
}