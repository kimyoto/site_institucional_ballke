import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
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
  const [content, setContent] = useState<CarreirasPageData | null>(null);

  // Form states
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [posicao, setPosicao] = useState('');
  const [experiencia, setExperiencia] = useState<'sim' | 'nao' | null>(null);
  const [textoDescritivo, setTextoDescritivo] = useState('');
  const [curriculo, setCurriculo] = useState<File | null>(null);
  
  // UI States
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [erroValidacao, setErroValidacao] = useState('');


  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/carreiras/`)
      .then(response => response.json())
      .then(data => setContent(data))
      .catch(error => {
        console.error("Erro ao buscar dados da página de Carreiras:", error);
        // Fallback content
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
        });
      });
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        setCurriculo(file);
        setErroValidacao('');
      } else {
        setCurriculo(null);
        setErroValidacao('Formato de arquivo inválido. Por favor, envie um PDF ou Word.');
      }
    }
  };

  const resetForm = () => {
    setNome('');
    setEmail('');
    setIdade('');
    setTelefone('');
    setPosicao('');
    setExperiencia(null);
    setTextoDescritivo('');
    setCurriculo(null);
    // Reset file input
    const fileInput = document.getElementById('curriculo-upload') as HTMLInputElement;
    if(fileInput) fileInput.value = '';
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErroValidacao('');

    // --- Validation ---
    if (!nome.trim() || !email.trim() || !idade.trim() || !telefone.trim() || !posicao.trim()) {
      setErroValidacao('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErroValidacao('Por favor, insira um e-mail válido.');
      return;
    }
    if (experiencia === null) {
      setErroValidacao('Por favor, selecione se você tem experiência.');
      return;
    }
    if (experiencia === 'sim' && !textoDescritivo.trim()) {
      setErroValidacao('Por favor, adicione uma descrição da sua experiência.');
      return;
    }
    if (!curriculo) {
      setErroValidacao('Por favor, faça o upload do seu currículo.');
      return;
    }
    // --- End Validation ---

    setFormStatus('sending');

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('idade', idade);
    formData.append('telefone', telefone);
    formData.append('posicao', posicao);
    formData.append('tem_experiencia', experiencia);
    formData.append('descricao_experiencia', textoDescritivo);
    formData.append('arquivo', curriculo);

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/enviar-curriculo/`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormStatus('success');
        resetForm();
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
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${content.hero_section.hero_bg_img})`
  };

  const isDescritivoDisabled = experiencia !== 'sim';
  const experiencePlaceholder = experiencia === 'nao' ? 'Não aplicável' : 'Descreva sua experiência...';


  return (
    <>
      <section className="section-container carreiras-hero-background" style={heroStyle}>
        <h2 className="carreiras-hero-title">{content.hero_section.hero_text}</h2>
      </section>

      <section className="section-container carreiras-text">
        <p className="carreiras-text1">{content.form_section.form_intro_text}</p>
      </section>

      <section className="section-container informacoes-pessoais-container">
        <h2 className="informacoes">{content.form_section.form_title}</h2>
        
        <form className="form-container" onSubmit={handleSubmit}>
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

          <div className="experience-wrapper">
            <p className="carreiras-text1" style={{ textAlign: 'center', width: '100%', marginBottom: '8px' }}>
              {content.form_section.form_experience}
            </p>
            
            <div className="experience-row">
              <div className="button-group">
                <BotaoPagina texto="Sim" isSelected={experiencia === 'sim'} onClick={() => setExperiencia('sim')}/>
                <BotaoPagina texto="Não" isSelected={experiencia === 'nao'} onClick={() => { setExperiencia('nao'); setTextoDescritivo(''); }}/>
              </div>
              <CampoDeTexto placeholder={experiencePlaceholder} desabilitar={isDescritivoDisabled} valor={textoDescritivo} onChange={setTextoDescritivo}/>
            </div>
          </div>

          <div className="form-footer">
            {erroValidacao && <p className="form-error-message">{erroValidacao}</p>}

            {formStatus === 'success' && (
              <p className="form-success-message">Obrigado! Seu currículo foi enviado com sucesso.</p>
            )}
            {formStatus === 'error' && (
              <p className="form-error-message">Desculpe, ocorreu um erro. Tente novamente mais tarde.</p>
            )}

            <div className="submission-row">
              <div className="upload-container">
                  <label htmlFor="curriculo-upload" className="botao-upload">
                      {content.form_section.form_upload_text1}
                      <br/>
                      <span>{content.form_section.form_upload_text2}</span>
                  </label>
                  <input 
                      id="curriculo-upload"
                      type="file" 
                      accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleFileChange} 
                      style={{display: 'none'}} 
                  />
                  {curriculo && (
                    <p className="file-name">
                        Arquivo selecionado: {curriculo.name.length > 80 ? curriculo.name.substring(0, 80) + '...' : curriculo.name}
                    </p>
                )}
              </div>
              
              <button type="submit" className="submit-button-carreiras" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Enviando...' : content.form_section.form_btn_text}
              </button>
            </div>
          </div>
        </form>
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
