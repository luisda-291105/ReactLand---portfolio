export default function Contact() {
    return (
        <div className="container contacto" id="contacto">
            <div className="section-header">
                <h2 className="section-title">Contáctanos</h2>
                <p className="section-subtitle">¿Tienes preguntas? Escríbenos y te responderemos pronto.</p>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="info-content">
                            <h4>Email</h4>
                            <p>info@reactland.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="info-content">
                            <h4>Teléfono</h4>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info-content">
                            <h4>Ubicación</h4>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}


function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const data = {
            name: form.name?.value || '',
            email: form.email?.value || '',
            message: form.message?.value || '',
        }
        console.log('Contacto enviado:', data)
    }

    return (
        <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Tu nombre" />
                    <div className="error-message" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="tu@email.com" />
                    <div className="error-message" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" rows="5" placeholder="Tu mensaje..." />
                    <div className="error-message" />
                </div>
                <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
                </div>

    )
}