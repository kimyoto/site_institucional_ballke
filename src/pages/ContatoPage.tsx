import React, { useState, useEffect } from "react";
import "./ContatoPage.css";
import { CiPhone, CiMail } from "react-icons/ci";
import { SEO } from "../components/SEO";

interface ContatoHeroSection {
  hero_bg_img: string | null;
  hero_text_linha1: string | null;
  hero_text_linha2: string | null;
}

interface SEOSection {
  seo_title: string | null;
  seo_description: string | null;
}

interface ContatoConteudoSection {
  content_title: string | null;
  content_telefone_title: string | null;
  content_telefone_number: string | null;
  content_telefone_text1: string | null;
  content_telefone_text2: string | null;
  content_email_title: string | null;
  content_email_address: string | null;
}

interface ContatoFormSection {
  form_title: string | null;
  form_subtitle: string | null;
  form_name_placeholder: string | null;
  form_email_placeholder: string | null;
  form_cidade_placeholder: string | null;
  form_feedback_placeholder: string | null;
  form_btn_text: string | null;
}

interface ContatoPageData {
  hero_section: ContatoHeroSection;
  conteudo_section: ContatoConteudoSection;
  formulario_section: ContatoFormSection;
  seo_section: SEOSection;
}

function ContatoPage() {

  const [content, setContent] = useState<ContatoPageData | null>(null);

  // Estados para os campos do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [feedback, setFeedback] = useState('');

  // Estado para controlar o status do envio do formulário
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/contato/`)
      .then((response) => response.json())
      .then((data: ContatoPageData) => setContent(data))
      .catch((error) => {
        console.error("Erro ao buscar dados da página de Contato:", error);
        setContent({
          hero_section: {
            hero_bg_img: require('../assets/duvidas-bkg.png'),
            hero_text_linha1: "Dúvidas sobre o",
            hero_text_linha2: "Grupo Ballke?"
          },
          seo_section: {
            seo_title: "Grupo Ballke | Contato",
            seo_description: "Entre em contato conosco para dúvidas, sugestões ou suporte."
          },
          conteudo_section: {
            content_title: "Fale Conosco",
            content_telefone_title: "Telefone",
            content_telefone_number: "(11) 5199-0688",
            content_telefone_text1: "Segunda a Sexta",
            content_telefone_text2: "7h42 às 18h00 (BRST)",
            content_email_title: "E-mail",
            content_email_address: "falecom@grupoballke.com.br"
          },
          formulario_section: {
            form_title: "Você é nosso cliente?",
            form_subtitle: "Nos envie um e-mail contando sua experiência",
            form_name_placeholder: "Nome:",
            form_email_placeholder: "E-mail:",
            form_cidade_placeholder: "Cidade:",
            form_feedback_placeholder: "Feedback:",
            form_btn_text: "Enviar e-mail"
          }
        })
      })
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('sending');

    const formData = { name, email, city, feedback };

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/enviar-email/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setName('');
        setEmail('');
        setCity('');
        setFeedback('');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Erro de rede ao enviar formulário:', error);
      setFormStatus('error');
    }
  };


  if (!content) return <p>Carregando...</p>;

  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url(${content.hero_section.hero_bg_img})
    `
  }

  return (
    <main className="contact-container">
      <SEO
        title={content.seo_section.seo_title || undefined}
        description={content.seo_section.seo_description || undefined}
      />
      {/* HERO SECTION */}
      <section className="contact-hero-section" style={heroStyle}>
        <h2 className="contact-hero-text">
          {content.hero_section.hero_text_linha1}
          <br />
          {content.hero_section.hero_text_linha2}
        </h2>
      </section>

      {/* INFO SECTION */}
      <section className="contact-content-wrapper">
        <h2 className="section-title">{content.conteudo_section.content_title}</h2>

        <div className="contact-info-grid">
          <div className="info-item">
            <h3 className="info-label">{content.conteudo_section.content_telefone_title}</h3>
            <p className="info-value phone-highlight">
              {React.createElement(CiPhone as any, { className: "contact-icon" })}
              <span className="icon-text">{content.conteudo_section.content_telefone_number}</span>
            </p>
            <p className="info-subtext">{content.conteudo_section.content_telefone_text1}
              <br />
              {content.conteudo_section.content_telefone_text2}
            </p>
          </div>

          <div className="info-item">
            <h3 className="info-label">{content.conteudo_section.content_email_title}</h3>
            <p className="info-value email-highlight">
              {React.createElement(CiMail as any, { className: "contact-icon" })}
              <span className="icon-text">{content.conteudo_section.content_email_address}</span>
            </p>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="form-container-block">
          <h2 className="form-title">{content.formulario_section.form_title}</h2>
          <p className="form-subtitle">{content.formulario_section.form_subtitle}</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={content.formulario_section.form_name_placeholder || undefined}
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder={content.formulario_section.form_email_placeholder || undefined}
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder={content.formulario_section.form_cidade_placeholder || undefined}
              className="form-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <textarea
              placeholder={content.formulario_section.form_feedback_placeholder || undefined}
              className="form-textarea"
              rows={5}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>

            <button type="submit" className="submit-button" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Enviando...' : content.formulario_section.form_btn_text}
            </button>

            {formStatus === 'success' && (
              <p className="form-success-message">Obrigado! Sua mensagem foi enviada com sucesso.</p>
            )}
            {formStatus === 'error' && (
              <p className="form-error-message">Desculpe, ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContatoPage;