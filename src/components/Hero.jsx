export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Crea experiencias web{" "}
              <span className="gradient-text">excepcionales</span> con React
            </h1>
            <p className="hero-subtitle">
              Una landing page dinámica y moderna lista para implementar en tu
              próximo proyecto. Diseño minimalista con micro-interacciones
              sutiles.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Comenzar Ahora</button>
              <button className="btn btn-secondary">
                <i className="fas fa-play-circle"></i> Ver Demo
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number" data-count="100">
                  0
                </span>
                %<span className="stat-label">Responsive</span>
              </div>
              <div className="stat">
                <span className="stat-number" data-count="95">
                  0
                </span>
                %<span className="stat-label">Performance</span>
              </div>
              <div className="stat">
                <span className="stat-number" data-count="150">
                  0
                </span>
                +<span className="stat-label">Componentes</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="floating-element el1" />
              <div className="floating-element el2" />
              <div className="floating-element el3" />
              <div className="code-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <span className="window-title">LandingPage.jsx</span>
                </div>
                <div className="window-content">
                  <pre>
                    <code>{`// Componente React Moderno
import React, { useState } from 'react';
import './LandingPage.css';


export default LandingPage;`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* function name() {

        const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    &lt;div className="landing-container"&gt;
      &lt;Header activeTab={activeTab} /&gt;
      &lt;HeroSection /&gt;
      &lt;Features /&gt;
      &lt;Testimonials /&gt;
      &lt;ContactForm /&gt;
    &lt;/div&gt;
  );
};

} */
