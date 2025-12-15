import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

interface HeroSection {
  hero_bg_img: string | null;
  hero_text_linha1: string | null;
  hero_text_linha2: string | null;
}

interface BrandsSection {
  brands_bg_img: string | null;
  brands_icon_magazine: string | null;
  brands_icon_nestsafe: string | null;
  brands_subtitle: string | null;
  brands_btn_magazine_text: string | null;
  brands_btn_nestsafe_text: string | null;
}

interface TimelineSection {
  timeline_bg_img: string | null;
  timeline_title: string | null;
  timeline_btn_text: string | null;
}

interface CultureSection {
  culture_bg_img: string | null;
  culture_title: string | null;
  culture_btn_text: string | null;
}

interface JobsSection {
  jobs_bg_img: string | null;
  jobs_title: string | null;
  jobs_btn_text: string | null;
}

interface SEOSection {
  seo_title: string | null;
  seo_description: string | null;
}

interface HomePageData {
  hero_section: HeroSection;
  brands_section: BrandsSection;
  timeline_section: TimelineSection;
  culture_section: CultureSection;
  jobs_section: JobsSection;
  seo_section: SEOSection;
}

function HomePage() {
  const [content, setContent] = useState<HomePageData | null>(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/home/`)
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        // Se a API falhar, define um conteúdo padrão para renderizar a página
        setContent({
          hero_section: {
            hero_bg_img: require("../assets/background1.png"),
            hero_text_linha1: "Seja bem-vindo ao",
            hero_text_linha2: "Grupo Ballke",
          },
          brands_section: {
            brands_bg_img: require("../assets/background2.png"),
            brands_icon_magazine: require("../assets/magazine_branco.png"),
            brands_icon_nestsafe: require("../assets/nestsafe_banco.png"),
            brands_subtitle: "Confira nossas marcas e descubra qual é a ideal para você.",
            brands_btn_magazine_text: "Visitar site",
            brands_btn_nestsafe_text: "Visitar site",
          },
          timeline_section: {
            timeline_bg_img: require("../assets/background3.png"),
            timeline_title: "Nossa trajetória até aqui",
            timeline_btn_text: "Conheça",
          },
          culture_section: {
            culture_bg_img: require("../assets/background4.png"),
            culture_title: "Nossa Cultura",
            culture_btn_text: "Saiba mais",
          },
          jobs_section: {
            jobs_bg_img: require("../assets/background5.png"),
            jobs_title: "Trabalhe Conosco",
            jobs_btn_text: "Vagas Disponíveis",
          },
          seo_section: {
            seo_title: "Grupo Ballke | Soluções em Produtos e Serviços para Saúde",
            seo_description: "O Grupo Ballke é referência no Brasil em distribuição de produtos para saúde, com mais de 20 anos de atuação, ampla variedade de itens e atendimento especializado.",
          },
        });
      });
  }, []);

  if (!content) return <p>Carregando...</p>;

  /* Estilos dinâmicos para as seções com imagens de fundo */
  const heroStyle = {
    backgroundImage: `
      radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0) 5%,
        rgba(0, 0, 0, 0.7) 70%
      ),
      url(${content.hero_section.hero_bg_img})
    `,
  };

  const brandsStyle = {
    backgroundImage: `url(${content.brands_section.brands_bg_img})`,
  };

  const timelineStyle = {
    backgroundImage: `
      linear-gradient(to left, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0.7) 90%),
      url(${content.timeline_section.timeline_bg_img})`,
  };

  const cultureStyle = {
    backgroundImage: `
      linear-gradient(to left, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0.7) 90%),
      url(${content.culture_section.culture_bg_img})`,
  };

  const jobsStyle = {
    backgroundImage: `
      linear-gradient(to left, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0.7) 90%),
      url(${content.jobs_section.jobs_bg_img})`,
  };

  /* Renderiza a página inicial com os dados carregados */
  return (
    <>
      <SEO
        title={content.seo_section.seo_title || undefined}
        description={content.seo_section.seo_description || undefined}
      />
      <main className="sections-container">
        {/* HERO SECTION */}
        <section className="hero-section" style={heroStyle}>
          <h2 className="text-top">
            {content.hero_section.hero_text_linha1}
            <br />
            {content.hero_section.hero_text_linha2}
          </h2>
        </section>

        {/* BRANDS SECTION */}
        <section className="section-bg-two" style={brandsStyle}>
          <div className="sub-section-container">
            <h2 className="text-bg2">
              {content.brands_section.brands_subtitle}
            </h2>
          </div>

          <div className="sub-section-container">
            <div className="magazine-medica-buttons">
              {content.brands_section.brands_icon_magazine && (
                <img
                  src={content.brands_section.brands_icon_magazine}
                  alt="Logo Magazine Médica"
                  className="hero-image-logo logo-2"
                />
              )}
              <a
                href="https://www.magazinemedica.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button"
              >
                {content.brands_section.brands_btn_magazine_text}
              </a>
            </div>
            <div className="nestsafe-buttons">
              {content.brands_section.brands_icon_nestsafe && (
                <img
                  src={content.brands_section.brands_icon_nestsafe}
                  alt="Logo Nestsafe"
                  className="hero-image-logo logo-1"
                />
              )}
              <a
                href="https://www.nestsafe.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button">
                {content.brands_section.brands_btn_nestsafe_text}
              </a>
            </div>
          </div>
        </section>

        { /* TIMELINE SECTION */}
        <section className="section-bg-three" style={timelineStyle}>
          <h2 className="bg-three-text">{content.timeline_section.timeline_title}</h2>

          <a href="conheca" className="conheca-button button-3">
            {content.timeline_section.timeline_btn_text}
          </a>
        </section>

        { /* CULTURE SECTION */}
        <section className="section-bg-four" style={cultureStyle}>
          <h2 className="bg-four-text">{content.culture_section.culture_title}</h2>
          <Link to="/nossa-cultura" className="saiba-mais-button button-4">
            {content.culture_section.culture_btn_text}
          </Link>
        </section>

        { /* JOBS SECTION */}
        <section className="section-bg-five" style={jobsStyle}>
          <h2 className="bg-five-text">{content.jobs_section.jobs_title}</h2>
          <a href="carreiras" className="vagas-button button-5">
            {content.jobs_section.jobs_btn_text}
          </a>
        </section>
      </main>
    </>
  );
}

export default HomePage;
