import React, { useState, useEffect } from "react";
import "./CarreirasPage.css";
import CampoDeTexto from "../components/campo-de-texto/CampoDeTexto";
import BotaoPagina from "../components/botao-pagina/BotaoPagina";

interface CarreirasHeroSection {
  hero_bg_img: string | null;
  hero_text: string | null;
}

interface CarreirasFormSection {
  form_intro_text: string | null;
  form_title: string | null;
  form_name: string | "";
  form_email: string | "";
  form_age: string | "";
  form_phone: string | "";
  form_position: string | "";
  form_experience: string | "";
  form_upload_text1: string | null;
  form_upload_text2: string | null;
  form_btn_text: string | null;
}

interface CarreirasPositionsSection {
  positions_title: string | null;
  positions_location: string | null;
  positions_job_type: string | null;
}

interface CarreirasPageData {
  hero_section: CarreirasHeroSection;
  form_section: CarreirasFormSection;
  positions_section: CarreirasPositionsSection[];
}

function CarreirasPage() {
  const [desabilitarCampoDescritivo, setDesabilitarCampoDescritivo] = useState(true);
  const [selecionado, setSelecionado] = useState<'sim' | 'nao' | null>(null);
  const [textoDescritivo, setTextoDescritivo] = useState(''); 
  const [content, setContent] = useState<CarreirasPageData | null>(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [posicao, setPosicao] = useState('');
  const [erroValidacao, setErroValidacao] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/carreiras/`)
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => {
        console.error("Erro ao buscar dados da página de Carreiras:", error);
        setContent({
          hero_section: {
            hero_bg_img: require("../assets/carreiras-bkg.png"),
            hero_text: "Carreiras",
          },
          form_section: {
            form_intro_text: "Faça parte de uma equipe que transforma desafios em inovação e promove soluções sustentáveis para um mundo melhor. No Grupo Ballke, acreditamos no poder das pessoas e investimos no desenvolvimento de talentos. Aqui, você encontrará um ambiente colaborativo, oportunidades de crescimento e a chance de contribuir ativamente para projetos de impacto global. Junte-se a nós e construa um futuro repleto de propósito e sucesso profissional. Explore nossas oportunidades e venha fazer a diferença!",
            form_title: "Informações pessoais",
            form_name: "Nome completo:",
            form_email: "E-mail:",
            form_age: "Idade:",
            form_phone: "Telefone de contato:",
            form_position: "Para qual área ou cargo você deseja se candidatar?",
            form_experience: "Você tem experiência na área ou cargo desejada?",
            form_upload_text1: "Faça upload do seu currículo",
            form_upload_text2: "(formato PDF ou Word)",
            form_btn_text: "Enviar currículo",
          },
          positions_section: []
        })
      });
  }, []);

  if (!content) return <p>Carregando...</p>;

  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${content.hero_section.hero_bg_img})
    `
  }

  const validarFormulario = () => {
    if (!nome.trim()) {
      setErroValidacao('Por favor, preencha o campo Nome completo.');
      return false;
    }
    if (!email.trim()) {
      setErroValidacao('Por favor, preencha o campo E-mail.');
      return false;
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setErroValidacao('Por favor, insira um e-mail válido.');
      return false;
    }
    if (!idade.trim()) {
      setErroValidacao('Por favor, preencha o campo Idade.');
      return false;
    }
    if (!telefone.trim()) {
      setErroValidacao('Por favor, preencha o campo Telefone.');
      return false;
    }
    if (!posicao.trim()) {
      setErroValidacao('Por favor, preencha o campo Cargo/Área desejada.');
      return false;
    }
    if (selecionado === null) {
      setErroValidacao('Por favor, selecione "Sim" ou "Não" na seção de experiência.');
      return false;
    }
    if (selecionado === 'sim' && !textoDescritivo.trim()) {
      setErroValidacao('Por favor, preencha o campo de descrição da experiência.');
      return false;
    }
    setErroValidacao('');
    return true;
  };

  const handleEnviarCurriculo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    validarFormulario();
  };
  
  const experiencePlaceholder = selecionado === null
    ? 'Selecione se você tem experiência'
    : (selecionado === 'nao' ? '' : 'Deixar descriSelecione se você tem experiênciativo');

  return (
    <>
      <section className="section-container carreiras-hero-background" style={heroStyle}>
        <h2 className="carreiras-hero-title">{content.hero_section.hero_text}</h2>
      </section>

      <section className="section-container carreiras-text">
        <h2 className="carreiras-text1">
          {content.form_section.form_intro_text}
        </h2>
      </section>

    <section className="section-container informacoes-pessoais-container" >
      <h2 className="informacoes">{content.form_section.form_title}</h2>
      <form className="form-container"> 
        <div className="um-campo">
          <CampoDeTexto placeholder={content.form_section.form_name} required={true} valor={nome} onChange={setNome}/>
        </div>
        <div className='multiplos-campos'>
          <CampoDeTexto placeholder={content.form_section.form_email} required={true} valor={email} onChange={setEmail}/>
          <CampoDeTexto placeholder={content.form_section.form_age} required={true} valor={idade} onChange={setIdade}/>
          <CampoDeTexto placeholder={content.form_section.form_phone} required={true} valor={telefone} onChange={setTelefone}/>
        </div>
        <div className="um-campo">
          <CampoDeTexto placeholder={content.form_section.form_position} required={true} valor={posicao} onChange={setPosicao}/>
        </div>
      </form>
      <text className="carreiras-text1">{content.form_section.form_experience}</text>
      <div className="button-container">
        <BotaoPagina texto="Sim" isSelected={selecionado === 'sim'} onClick={() => { setDesabilitarCampoDescritivo(false); setSelecionado('sim'); }}/>
        <BotaoPagina texto="Não" isSelected={selecionado === 'nao'} onClick={() => { setDesabilitarCampoDescritivo(true); setSelecionado('nao'); setTextoDescritivo(''); }}/>
        <CampoDeTexto placeholder={experiencePlaceholder} desabilitar={desabilitarCampoDescritivo} valor={textoDescritivo} onChange={setTextoDescritivo}/> 
      </div>
      {erroValidacao && <p className="form-error-message">{erroValidacao}</p>}
      <div className="button-enviar-container">
        <button className="botao-enviar-container text">{content.form_section.form_upload_text1}<br/>{content.form_section.form_upload_text2}</button>
        <button type="button" className="submit-button-carreiras" onClick={handleEnviarCurriculo}>{content.form_section.form_btn_text}</button>
      </div>
    </section>

      {/* Positions Section */}
      {content.positions_section && content.positions_section.length > 0 ? (
        <>
          <section className="section-container vagas-hero">
            <h2 className="vagas">Vagas</h2>
          </section>
          <section className="section-container vagas-lista-container">
            <table className='vagas-table'>
              <tbody>
                {content.positions_section.map(position => (
                  <tr>
                    <td>{position.positions_title}</td>
                    <td>{position.positions_location}</td>
                    <td>{position.positions_job_type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      ) : (
        <div style={{ marginTop: '32px' }}></div>
      )}
    </>
  );
}

export default CarreirasPage;
