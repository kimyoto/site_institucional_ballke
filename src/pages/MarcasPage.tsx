import React, { useState, useEffect } from "react";
import "./MarcasPage.css";

interface MarcasHeroSection {
  hero_bg_img: string | null;
  hero_text: string | null;
}

interface MarcasContentSection {
  content_icon_magazine: string | null;
  content_text_magazine: string | null;
  content_icon_nestsafe: string | null;
  content_text_nestsafe: string | null;
  content_icon_bbranding: string | null;
  content_text_bbranding: string | null;
}

interface MarcasPageData {
  hero_section: MarcasHeroSection;
  content_section: MarcasContentSection;
}

function MarcasPage() {
  const [content, setContent] = useState<MarcasPageData | null>(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/marcas/`)
      .then((response) => response.json())
      .then((data: MarcasPageData) => setContent(data))
      .catch((error) => {
        console.error("Erro ao buscar dados da página Marcas:", error);
        setContent({
          hero_section: { 
            hero_bg_img: require('../assets/marcas-bkg.png'), 
            hero_text: "Nossas Marcas" 
          },
          content_section: {
            content_icon_magazine: require("../assets/magazinecolorido.png"),
            content_text_magazine: "Com mais de 20 anos de experiência no mercado, a Magazine Médica é uma marca consolidada no fornecimento de produtos médicos para profissionais da saúde, clínicas e consultórios. A Magazine Médica atua com foco no varejo médico, oferecendo mais de 10 mil produtos em seu e-commerce e mantendo um relacionamento próximo com os profissionais que cuidam da saúde no Brasil.",
            content_icon_nestsafe: require("../assets/nestsafecolorido.png"),
            content_text_nestsafe: "Criada para atender revendedores, farmácias, distribuidores e e-commerces, a Nestsafe oferece produtos médicos que combinam alto padrão de qualidade, conformidade regulatória e preços acessíveis. A Nestsafe se posiciona como uma solução estratégica para empresas que atuam na revenda de produtos para saúde. Sua linha inclui itens essenciais para o dia a dia de clínicas, hospitais e estabelecimentos do setor, com garantia de procedência e confiabilidade.",
            content_icon_bbranding: require("../assets/bbranding.png"),
            content_text_bbranding: "A BBranding é a holding responsável por integrar, direcionar e impulsionar as marcas do Grupo Ballke, atuando como o núcleo estratégico que garante alinhamento, eficiência e crescimento sustentável. Com visão de longo prazo e gestão orientada por dados, a BBranding coordena operações, fortalece processos e promove inovação contínua, assegurando que cada marca do grupo mantenha identidade própria, desempenho consistente e foco na entrega de valor ao mercado.",
          }
        });
      });
  }, []);

  if (!content) return <p>Carregando...</p>;

  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url(${content.hero_section.hero_bg_img})
    `
  }

  return (
    <>
      <section className="section-container marcas-hero-background" style={heroStyle}>
        <h2 className="marcas-title">{content.hero_section.hero_text}</h2>
      </section>

      <section className="section-container marcas-content-section">
        <img
          src={content.content_section.content_icon_magazine || undefined}
          alt="Magazine Médica"
          className="marca-logo logo-magazine"
        />
        <p className="marca-text text-magazine">
          {content.content_section.content_text_magazine}
        </p>

        <img
          src={content.content_section.content_icon_nestsafe || undefined}
          alt="Nestsafe"
          className="marca-logo logo-nestsafe"
        />
        <p className="marca-text text-nestsafe">
          {content.content_section.content_text_nestsafe}
        </p>

        <img
          src={content.content_section.content_icon_bbranding || undefined}
          alt="B.Branding"
          className="marca-logo logo-bbranding"
        />
        <p className="marca-text text-bbranding">{content.content_section.content_text_bbranding}</p>
      </section>
    </>
  );
}

export default MarcasPage;
