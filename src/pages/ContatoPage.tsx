import React from "react";
import "./ContatoPage.css";
import { CiPhone, CiMail } from "react-icons/ci";

function ContatoPage() {

  return (
    <main className="contact-container">
      {/* HERO SECTION */}
      <section className="contact-hero-section">
        <h2 className="contact-hero-text">
          Dúvidas sobre o
          <br/>
          Grupo Ballke?
        </h2>
      </section>

      {/* INFO SECTION */}
      <section className="contact-content-wrapper">
        <h2 className="section-title">Fale Conosco</h2>
        
        <div className="contact-info-grid">
          <div className="info-item">
            <h3 className="info-label">Telefone</h3>
            <p className="info-value phone-highlight">
              {React.createElement(CiPhone as any, { className: "contact-icon" })}
              <span className="icon-text">(11) 5199-0688</span>
            </p>
            <p className="info-subtext">{"Segunda a Sexta\n7h42 às 18h00 (BRST)"}</p>
          </div>

          <div className="info-item">
            <h3 className="info-label">E-mail</h3>
            <p className="info-value email-highlight">
              {React.createElement(CiMail as any, { className: "contact-icon" })}
              <span className="icon-text">falecom@grupoballke.com.br</span>
            </p>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="form-container-block">
          <h2 className="form-title">Você é nosso cliente?</h2>
          <p className="form-subtitle">Nos envie um e-mail contando sua experiência</p>

          <form className="contact-form">
            <input 
              type="text" 
              placeholder="Nome:"
              className="form-input"
            />
            <input 
              type="email" 
              placeholder="E-mail:" 
              className="form-input"
            />
            <input 
              type="text" 
              placeholder="Cidade:"
              className="form-input"
            />
            <textarea 
              placeholder="Feedback:" 
              className="form-textarea"
              rows={5}
            ></textarea>

            <button type="submit" className="submit-button">
              Enviar e-mail
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContatoPage;