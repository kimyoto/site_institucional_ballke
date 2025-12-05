import React, { useState, useEffect } from "react";
import "./QuemSomosPage.css";
import { Link } from "react-router-dom";

interface QuemSomosHeroSection {
  hero_bg_img: string | null;
  hero_text: string | null;
}

interface QuemSomosContentSection {
  content_title: string | null;
  content_paragraph1: string | null;
  content_paragraph2: string | null;
  content_paragraph3: string | null;
}

interface QuemSomosCardsSection {
  cards_img_area_atuacao: string | null;
  cards_text_area_atuacao: string | null;
  cards_img_unidade: string | null;
  cards_text_unidade: string | null;
  cards_img_cultura: string | null;
  cards_text_cultura: string | null;
}

interface Partner {
  name: string | null;
  alt: string | null;
  image: string | null;
}

interface QuemSomosPageData {
  hero_section: QuemSomosHeroSection;
  content_section: QuemSomosContentSection;
  cards_section: QuemSomosCardsSection;
  partners: Partner[];
}

function QuemSomosPage() {
  const [content, setContent] = useState<QuemSomosPageData | null>(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/quem-somos/`)
      .then((response) => response.json())
      .then((data: QuemSomosPageData) => setContent(data))
      .catch((error) => {
        console.error("Error fetching Quem Somos data:", error);
        setContent({
          hero_section: { 
            hero_bg_img: require("../assets/topoquemsomos.png"), 
            hero_text: "Quem Somos" 
          },
          content_section: {
            content_title: "Grupo Ballke",
            content_paragraph1: "Nosso propósito é impulsionar a melhoria contínua dos serviços de saúde e estimular a inovação no mercado. Atuamos fornecendo produtos e soluções que apoiam profissionais e instituições na conquista de resultados cada vez mais eficientes e relevantes no cenário nacional.",
            content_paragraph2: "Além disso, trabalhamos em conformidade com as regulamentações nacionais e internacionais, garantindo que todos os nossos produtos estejam em total conformidade com os mais altos padrões de qualidade.",
            content_paragraph3: "No Grupo Ballke, cada produto reflete nosso compromisso com a inovações, a precisão e o cuidado com a saúde. Convidamos você a explorar nossas soluções e ver como podemos agregar valor aos seus processos, contribuindo para resultados mais eficientes, sustentáveis e inovadores.",
          },
          cards_section: {
            cards_img_area_atuacao: require("../assets/quemsomos1.png"),
            cards_text_area_atuacao: "NOSSAS ÁREAS DE ATUAÇÃO",
            cards_img_unidade: require("../assets/quemsomos2.png"),
            cards_text_unidade: "NOSSA UNIDADE",
            cards_img_cultura: require("../assets/quemsomos3.png"),
            cards_text_cultura: "NOSSA CULTURA",
          },
          partners: [
            {
              name: "Meta",
              alt: "Logo Meta",
              image: require("../assets/meta.png"),
            },
            {
              name: "Google",
              alt: "Logo Google",
              image: require("../assets/google.png"),
            },
            {
              name: "Optidata",
              alt: "Logo Optidata",
              image: require("../assets/optidata.png"),
            },
          ],
        })
      });
  }, []);

  if (!content) return <p>Carregando...</p>;

  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
      url(${content.hero_section.hero_bg_img})
    `,
  }

  return (
    <>
      <section className="section-container quemsomos-hero-background" style={heroStyle}>
        <h2 className="text-topo-quemsomos">{content.hero_section.hero_text}</h2>
      </section>

      <section className="section-container text-images-quemsomos">
        <h2 className="quemsomos-grupoballke">{content.content_section.content_title}</h2>
        <h2 className="quemsomos-text">
          {content.content_section.content_paragraph1}
        </h2>
        <h2 className="quemsomos-text">
          {content.content_section.content_paragraph2}
        </h2>
        <h2 className="quemsomos-text">
          {content.content_section.content_paragraph3}
        </h2>
      </section>

      <section className="section-container quemsomos-images">
        <div>
          <img
            src={content.cards_section.cards_img_area_atuacao || undefined}
            alt="Nossas áreas de atuação"
            className="quemsomos-section-imgs"
          ></img>
          <div className="gray-bar-atuacao">
            <h2 className="text-images-1">{content.cards_section.cards_text_area_atuacao}</h2>
          </div>
        </div>

        <div className="quemsomos-duas-colunas">
          <div className="coluna">
            <img
              src={content.cards_section.cards_img_unidade || undefined}
              alt="Nossa Unidade"
              className="quemsomos-section-imgs"
            />
            <div className="image-gray-bar">
              <h2 className="text-images-1">{content.cards_section.cards_text_unidade}</h2>
            </div>
          </div>
          
          <div className="coluna">
            <Link to="/nossa-cultura" className="link-block-wrapper" >
              <img
                src={content.cards_section.cards_img_cultura || undefined}
                alt="Nossa Cultura"
                className="quemsomos-section-imgs"
              />
              <div className="image-gray-bar">
                <h2 className="text-images-1">{content.cards_section.cards_text_cultura}</h2>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {content.partners && content.partners.length > 0 && (
        <section className="section-container parceiros-section">
          <h2 className="parceiros-title">Parceiros</h2>

          <div className="logos-container">
            {content.partners.map(partner => (
              <div key={partner.name} >
                  <img
                    src={partner.image || undefined} 
                    alt={partner.name || undefined} 
                    className="parceiros-logo" 
                    />
              </div>
            ))}
          </div>
        </section>
            )}
    </>
  );
}

export default QuemSomosPage;
