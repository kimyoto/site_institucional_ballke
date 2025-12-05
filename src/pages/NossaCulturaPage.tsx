import React, { useState, useEffect } from "react";
import "./NossaCulturaPage.css";

interface NossaCulturaHeroSection {
  hero_bg_img: string | null;
  hero_text: string | null;
}

interface NossaCulturaContentSection {
  content_missao_title: string | null;
  content_missao_text: string | null;
  content_visao_title: string | null;
  content_visao_text: string | null;
  content_valores_title: string | null;
  content_valores_list: string | null;
}

interface NossaCulturaPageData {
  hero_section: NossaCulturaHeroSection;
  content_section: NossaCulturaContentSection;
}

function NossaCulturaPage() {
  const [content, setContent] = useState<NossaCulturaPageData | null>(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/cultura/`)
      .then((response) => response.json())
      .then((data: NossaCulturaPageData) => setContent(data))
      .catch((error) => {
        console.error("Erro ao buscar dados da nossa cultura:", error);
        setContent({
          hero_section: { 
            hero_bg_img: require("../assets/nossacultura-topobkg.png"), 
            hero_text: "Nossa Cultura" 
          },
          content_section: {
            content_missao_title: "Missão",
            content_missao_text: "Ser um catalisador de negócios nas áreas da saúde e inovação, apoiando micro e pequenas empresas com estrutura, conhecimento e soluções para crescer de forma sustentável.",
            content_visao_title: "Visão",
            content_visao_text: "Tornar-se referência nacional em apoio estratégico a empresas da saúde e de inovação, reconhecido por transformar expertise e tecnologia em valor real para os parceiros e para o mercado.",
            content_valores_title: "Nossos principais valores:",
            content_valores_list: "Ética, Pró-atividade, Comprometimento com o cliente, Engajamento, Meritocracia sem discriminação, Ambiente propício para inovação",
          }
        });
      });
  }, []);

  if (!content) return <p>Carregando...</p>;

  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), 
      url(${content.hero_section.hero_bg_img})
    `,
  };

  const valores = content.content_section.content_valores_list
    ? content.content_section.content_valores_list.split(",")
    : [];

  return (
    <>
      <section className="section-container nossa-cultura-hero-background" style={heroStyle}>
        <h2 className="nossa-cultura-hero-title">{content.hero_section.hero_text}</h2>
      </section>

      <section className="section-container cultura-content-section">
        <h2 className="cultura-subtitle">{content.content_section.content_missao_title}</h2>
        <p className="cultura-text">
          {content.content_section.content_missao_text}
        </p>

        <h2 className="cultura-subtitle">{content.content_section.content_visao_title}</h2>
        <p className="cultura-text">
          {content.content_section.content_visao_text}
        </p>

        <h2 className="cultura-subtitle">{content.content_section.content_valores_title}</h2>

      <ul className="cultura-values-list">
        {valores.map((valor, index) => (
          <li key={index}>
            {valor.trim()}
            {index === valores.length - 1 ? "." : ";"}
          </li>
        ))}
      </ul>
      </section>
    </>
  );
}

export default NossaCulturaPage;
