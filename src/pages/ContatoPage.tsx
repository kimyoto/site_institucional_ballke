import React from "react";
import "./ContatoPage.css";

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
              <i className="fa fa-phone" aria-hidden="true" style={{marginRight: '8px'}}></i>
              (11) 5199-0688
            </p>
            <p className="info-subtext">{"Segunda a Sexta\n7h42 às 18h00 (BRST)"}</p>
          </div>

          <div className="info-item">
            <h3 className="info-label">E-mail</h3>
            <p className="info-value email-highlight">
              <i className="fa fa-envelope" aria-hidden="true" style={{marginRight: '8px'}}></i>
              falecom@grupoballke.com.br
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