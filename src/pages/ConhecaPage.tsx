import React, { useState, useEffect } from "react";
import "./ConhecaPage.css";

interface ConhecaHeroSection {
  hero_bg_img: string | null;
  hero_text_linha1: string | null;
  hero_text_linha2: string | null;
}

interface ConhecaContentSection {
  content_bg_img: string | null;
  content_paragraph1: string | null;
  content_paragraph2: string | null;
  content_paragraph3: string | null;
}

interface ConhecaTimelineSection {
  timeline_img: string | null;
}

interface ConhecaPageData {
  hero_section: ConhecaHeroSection;
  content_section: ConhecaContentSection;
  timeline_section: ConhecaTimelineSection;
}

function ConhecaPage() {
  const [content, setContent] = useState<ConhecaPageData | null>(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/conheca`)
      .then((response) => response.json())
      .then((data: ConhecaPageData) => setContent(data))
      .catch((error) => {
        console.error("Erro ao buscar dados da página Conheça:", error);
        setContent({
          hero_section: {
            hero_bg_img: require("../assets/conhecatopo.png"),
            hero_text_linha1: "Nossa trajetória",
            hero_text_linha2: "até aqui.",
          },
          content_section: {
            content_bg_img: require("../assets/conhecabkg.png"),
            content_paragraph1: "A história do Grupo Ballke é uma jornada construída com dedicação, inovação e compromisso com a excelência. Desde o seu início, buscamos transformar a saúde e o bem-estar das pessoas, oferecendo soluções eficientes e de alta qualidade nos segmentos em que atuamos.",
            content_paragraph2: "A cada novo desafio, reafirmamos nosso compromisso em entregar produtos e serviços que superem as expectativas de nossos clientes, sempre com foco no cuidado e na segurança. Ao longo de mais de 20 anos de atuação, o Grupo Ballke tem se destacado pela sua capacidade de adaptação e evolução, buscando constantemente aprimorar seus processos e garantir o melhor em cada entrega.",
            content_paragraph3: "Agora, ampliamos nosso olhar para contribuir ativamente com a inovação em diferentes áreas do mercado. Nossa missão é apoiar empresas e profissionais na superação de desafios, promovendo soluções estratégicas, tecnológicas e sustentáveis que gerem impacto real — na saúde e além dela.",
          },
          timeline_section: {
            timeline_img: require("../assets/lona.png"),
          }
        });
      });
  }, []);

  if (!content) return <p>Carregando...</p>;
  
  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(17, 17, 17, 0.5), rgba(24, 24, 24, 0.5)),
      url(${content.hero_section.hero_bg_img})
    `,
  };

  const contentStyle = {
    backgroundImage: `
      url(${content.content_section.content_bg_img})
    `,
  }

  return (
    <>
      <section className="section-container conheca-hero-background" style={heroStyle}>
        <h2 className="topo-text-1">
          {content.hero_section.hero_text_linha1}
          <br />
          {content.hero_section.hero_text_linha2}
        </h2>
      </section>

      <section className="section-container conheca-main-background" style={contentStyle}>
        <h2 className="conheca-text">
          {content.content_section.content_paragraph1}
        </h2>

        <h2 className="conheca-text">
          {content.content_section.content_paragraph2}
        </h2>

        <h2 className="conheca-text">
          {content.content_section.content_paragraph3}
        </h2>
      </section>
      {content.timeline_section.timeline_img && (
        <img
          src={content.timeline_section.timeline_img}
          alt="Imagem Lona Conheça"
          className="conheca-lona-image"
      />
      )}
    </>
  );
}

export default ConhecaPage;
