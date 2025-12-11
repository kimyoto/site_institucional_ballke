import React, { useState, useEffect } from "react";
import "./PoliticasPage.css";

interface PoliticasHeroSection {
  hero_bg_img: string | null;
  hero_text: string | null;
}

interface PoliticasPageData {
  hero_section: PoliticasHeroSection;
}

function PoliticasPage() {
  const [content, setContent] = useState<PoliticasPageData | null>(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/politicas/`)
      .then((response) => response.json())
      .then((data: PoliticasPageData) => setContent(data))
      .catch((error) => {
        console.error("Error fetching Políticas data:", error);
        setContent({
          hero_section: {
            hero_bg_img: require("../assets/topoquemsomos.png"),
            hero_text: "Política de Privacidade",
          },
        });
      });
  }, []);

  if (!content) return <p>Carregando...</p>;

  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
      url(${content.hero_section.hero_bg_img})
    `,
  };

  return (
    <>
      <section
        className="section-container politicas-hero-background"
        style={heroStyle}
      >
        <h2 className="text-topo-politicas">{content.hero_section.hero_text}</h2>
      </section>

      <section className="section-container politicas-content-section">
        <div className="politicas-wrapper">
          <p className="politicas-intro">
            O Grupo Ballke com mais de 21 anos de atuação no mercado, tem como um
            de seus princípios básicos a proteção e o constante respeito à sua
            privacidade.
          </p>

          <p className="politicas-text">
            Por isso, atualizamos nossas políticas para deixar transparente como,
            quando e porquê nós coletamos informações de nossos clientes.
          </p>

          <p className="politicas-text">
            Também temos disciplinado nesta Política de Privacidade a forma que
            utilizamos seus dados, as condições pelas quais nós podemos
            transferir as informações a terceiros, como nós armazenamos – de
            forma segura – e, principalmente, quais são seus direitos como
            usuário.
          </p>

          <p className="politicas-text">
            Desde já deixamos à sua disposição o contato do nosso Encarregado
            para responder qualquer dúvida ou questionamento sobre as políticas
            do Evento:
          </p>

          <div className="politicas-contact-info">
            <p>
              <strong>Encarregado:</strong> Francis Perini
            </p>
            <p>
              <strong>E-mail:</strong> lgpd@magazinemedica.com.br
            </p>
            <p>
              <strong>Redes sociais:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/francis-perini-4284b22b"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/francis-perini-4284b22b
              </a>
            </p>
          </div>

          <h3 className="politicas-section-title">1 - Quem somos nós?</h3>

          <p className="politicas-text">
            O Grupo Ballke é um conjunto de empresas nacionais que há mais de 18
            anos oferta produtos para saúde e cuidados do corpo, com mais de 10
            mil itens de marcas renomadas em estoque que atende todas as
            exigências do Ministério da Saúde e Anvisa.
          </p>

          <p className="politicas-text">
            Possui sede na Travessa Sinamomo, n. 70, Bairro Arvoredo, município
            de Concórdia-SC, CEP 89701-494. Nessa política de privacidade,
            "nós" se refere ao Grupo Ballke e/ou Magazine Médica.
          </p>

          <p className="politicas-text">
            Os contatos para eventuais reclamações ou dúvidas relativas às
            empresas é o que segue:
          </p>

          <div className="politicas-contact-info">
            <p>
              <strong>Encarregado:</strong> Francis Perini
            </p>
            <p>
              <strong>E-mail:</strong> lgpd@magazinemedica.com.br
            </p>
            <p>
              <strong>Redes sociais:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/francis-perini-4284b22b"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/francis-perini-4284b22b
              </a>
            </p>
          </div>

          <h3 className="politicas-section-title">
            2 - De que forma coletamos seus dados?
          </h3>

          <p className="politicas-text">Nós coletamos seus dados da seguinte forma:</p>

          <div className="politicas-subitem-group">
            <h4 className="politicas-subsection-title">
              1. Dados que você nos entrega diretamente
            </h4>

            <p className="politicas-text">
              São, por exemplo, os dados preenchidos em nosso formulário de
              cadastro. Alguns dados, tais como CPF, e-mail, nome, endereço,
              informações de pagamento, bem como outras informações de contato
              on-line ou número de telefone, são pedidos a você no formulário de
              cadastro para que seja possível a realização das transações.
            </p>
          </div>

          <div className="politicas-subitem-group">
            <h4 className="politicas-subsection-title">
              2. Dados que você nos entrega indiretamente
            </h4>

            <p className="politicas-text">
              Os seus dados podem ser disponibilizados para nós de forma indireta
              através da transmissão dos mesmos por terceiros, tais como:
            </p>

            <ul className="politicas-list">
              <li>Outros parceiros que coletaram seus dados e nos repassaram;</li>
              <li>
                Subcontratantes que nos prestam serviços, tais como forma de
                pagamento (máquinas de cartão de débito/crédito).
              </li>
            </ul>

            <p className="politicas-text">
              É importante que você veja as Políticas de Privacidade desses
              terceiros para entender de que forma eles coletam seus dados e
              transmitem a terceiros.
            </p>
          </div>

          <div className="politicas-subitem-group">
            <h4 className="politicas-subsection-title">
              3. Quando você visita nosso website
            </h4>

            <p className="politicas-text">
              Nós, como outras empresas, automaticamente coletamos as seguintes
              informações:
            </p>

            <ul className="politicas-list">
              <li>
                Dados técnicos, incluindo o tipo de aparelho que você está
                utilizando (smartphone, tablet, pc, etc), endereço IP, navegador
                e sistema operacional utilizado para acessar à internet. Esses
                dados são utilizados para melhorar os serviços oferecidos a você;
              </li>
              <li>
                Dados sobre sua visita a esse site. Nós coletamos informações
                sobre páginas que você visitou e como chegou até aqui, tempo
                utilizado em determinadas páginas, produtos e serviços que você
                viu ou procurou. Tudo isso para melhorar a experiência e entregar
                um produto cada vez mais de acordo com seus interesses.
              </li>
            </ul>

            <p className="politicas-text">
              Todas essas informações são coletadas através de "cookies" em nosso
              site – mais informações sobre o uso dos cookies pode ser encontrada
              na seção "Uso de Cookies" abaixo.
            </p>
          </div>

          <div className="politicas-subitem-group">
            <h4 className="politicas-subsection-title">4. Redes sociais</h4>

            <p className="politicas-text">
              Quando você interage conosco nas redes sociais – facebook, instagram,
              linkedin, por exemplo – eventualmente nós podemos coletar seus
              dados. Mas o tipo de dados que nós coletamos vai depender das
              configurações de privacidade da plataforma que você estiver usando.
            </p>
          </div>

          <div className="politicas-subitem-group">
            <h4 className="politicas-subsection-title">5. Dados Públicos</h4>

            <p className="politicas-text">
              Eventualmente podemos coletar dados que estão disponibilizados
              através de portais públicos para entender de que forma podemos
              entregar um produto/serviço ainda melhor para você. Mas não se
              preocupe, caso sejam coletados dados públicos será levado em conta
              a boa-fé, a finalidade e o interesse público que justificaram a sua
              disponibilização.
            </p>
          </div>

          <h3 className="politicas-section-title">
            3 - Que tipo de dados nós coletamos?
          </h3>

          <p className="politicas-text">
            Os dados pessoais que coletamos, armazenamos e utilizamos incluem,
            mas não se limitam a:
          </p>

          <ul className="politicas-list">
            <li>Nome completo;</li>
            <li>Endereço completo com CEP;</li>
            <li>E-mail;</li>
            <li>CPF;</li>
            <li>Telefone;</li>
            <li>Limite de Crédito;</li>
            <li>Dados bancários;</li>
            <li>
              Dados de cartão de crédito para faturamento da compra. Porém, as
              informações sobre o cartão de crédito não são armazenadas por nós,
              uma vez que são necessárias apenas para o processo de pagamento.
              Assim, há a transmissão dos dados para os operadores de pagamento
              que são especialistas em segurança da informação relativa aos
              pagamentos on-line;
            </li>
            <li>Dados sobre produtos, tais como unidade, quantidade, valor, data e hora;</li>
            <li>
              Dados sobre as atividades realizadas em nosso site – por exemplo,
              endereço IP e localização geográfica, a depender das
              configurações de privacidade do seu aparelho - e o aparelho
              utilizado para acesso;
            </li>
            <li>
              Qualquer outro dado que voluntariamente – isto é, com consentimento
              - você compartilhar conosco.
            </li>
          </ul>

          <p className="politicas-text">
            O Grupo Ballke e a Magazine Médica não coletam dados sensíveis
            relacionados a você, tais como origem racial ou étnica, convicção
            religiosa, opinião política, filiação a sindicato ou a organização
            de caráter religioso, filosófico ou político, dado referente à saúde
            ou à vida sexual, dado genético ou biométrico.
          </p>

          <p className="politicas-text">
            Contudo, se eventualmente se demonstrar necessário a coleta, por
            qualquer motivo, nós o informaremos de maneira clara quais dados
            pessoais sensíveis precisaremos coletar e por qual motivo o
            utilizaremos.
          </p>

          <h3 className="politicas-section-title">
            4 - Como seus dados são utilizados e porquê?
          </h3>

          <p className="politicas-text">
            Nós utilizamos seus dados com a finalidade de processar os pedidos
            realizados, em todo seu fluxo: cadastro do pedido, identificação do
            cliente, endereço para envio, CPF para emissão de Nota Fiscal, etc.
          </p>

          <p className="politicas-text">
            Além disso, também os utilizamos para fornecer, melhorar e
            desenvolver os serviços disponíveis, através da personalização dos
            mesmos.
          </p>

          <h3 className="politicas-section-title">
            5 - Por quanto tempo nós armazenamos seus dados?
          </h3>

          <p className="politicas-text">
            Nós armazenamos seus dados pelo tempo estritamente necessário para o
            seu tratamento, conforme as suas finalidades. Contudo, alguns dados
            podem ser mantidos em nosso banco de dados por tempo superior a
            outros, dependendo da sua necessidade. Nós somos obrigados legalmente
            a reter alguns tipos de dados para cumprir obrigações legais/
            regulatórias, como, por exemplo, para escrituração contábil junto
            aos órgãos fazendários.
          </p>

          <p className="politicas-text">
            Nossa política de armazenamento de dados é constantemente revisada
            por conta das mudanças legislativas, de modo que seus dados
            permaneçam em nosso sistema apenas pelo período indispensável aos
            seus propósitos.
          </p>

          <h3 className="politicas-section-title">
            6 - Quem tem acesso aos seus dados?
          </h3>

          <p className="politicas-text">
            Nós, do Grupo Ballke, prezamos pelo respeito à finalidade do uso dos
            dados que são coletados. Por isso, quem tem acesso aos seus dados
            são apenas colaboradores do grupo que necessitem desta utilização,
            como, por exemplo, as áreas de estoque e financeiro.
          </p>

          <p className="politicas-text">
            O compartilhamento de dados somente se dará para fins de viabilizar
            pagamentos e processamento de dados ou cumprir com exigências legais,
            regulatórias ou fiscais (inclusão do CPF para emissão de Nota Fiscal,
            por exemplo).
          </p>

          <p className="politicas-text">
            Afora essas hipóteses previstas na LGPD, nós, do Grupo Ballke, jamais
            compartilharemos seus dados pessoais.
          </p>

          <h3 className="politicas-section-title">
            7 - Bases Legais para Coleta e Tratamento dos seus dados
          </h3>

          <p className="politicas-text">
            A Lei Geral de Proteção de Dados determina que nós, como
            controladores, devemos nos fundamentar em uma das bases legais para
            a coleta e tratamento dos seus dados. Nós consideramos as seguintes
            bases legais para o tratamento dos dados:
          </p>

          <div className="politicas-subitem-group">
            <h4 className="politicas-subsection-title">
              1. Consentimento fornecido pelo titular
            </h4>

            <p className="politicas-text">
              Em nossos formulários sempre deixamos claros os motivos pelos quais
              estamos coletando seus dados e como serão utilizados, como, por
              exemplo, para realização dos pedidos, envios de e-mail, mensagens ou
              ligações de marketing. Assim, ao nos conceder o consentimento,
              iremos tratar seus dados com a finalidade exposta.
            </p>
          </div>

          <div className="politicas-subitem-group">
            <h4 className="politicas-subsection-title">2. Para execução do contrato</h4>

            <p className="politicas-text">
              Quando você realiza os pedidos em nosso site, é firmado um contrato
              de consumo entre você (consumidor) e a Magazine Médica (fornecedor).
              Alguns dados são necessários para que o contrato seja executado, como,
              por exemplo, o endereço para entrega dos produtos adquiridos.
            </p>
          </div>

          <div className="politicas-subitem-group">
            <h4 className="politicas-subsection-title">
              3. Para o cumprimento de obrigação legal ou regulatória
            </h4>

            <p className="politicas-text">
              Alguns dados são necessários para o cumprimento de obrigações legais
              impostas, como o seu CPF para emissão da Nota Fiscal de aquisição
              dos produtos, ou se alguma agência requerer a transmissão de dados.
            </p>
          </div>

          <div className="politicas-subitem-group">
            <h4 className="politicas-subsection-title">4. Legítimo interesse</h4>

            <p className="politicas-text">
              Quando for razoável para alcançarmos nossos objetivos como
              controlador dos seus dados, como, por exemplo, enviar a você um
              cupom de desconto para produtos em destaque em nossa loja virtual,
              contanto que os dados que utilizarmos forem legítimos e não impactem
              os seus direitos.
            </p>

            <p className="politicas-text">
              Nós consideramos como legítimo interesse as seguintes ações:
            </p>

            <ul className="politicas-list">
              <li>
                Comunicações com promoções e informativos sobre empresas do Grupo
                Ballke/Magazine Médica (whatsapp, e-mail, telefone, postagens,
                etc);
              </li>
              <li>
                Para pesquisas internas com o intuito de melhorar, modificar e
                personalizar nossos serviços e produtos a você e entender melhor
                nosso público.
              </li>
            </ul>

            <p className="politicas-text">
              Quando usamos como base o nosso legítimo interesse nós consideramos o
              impacto que nossa atuação terá para você (positivo ou negativo), além
              de analisar a adequação, a finalidade dos atos e os seus direitos
              como titular. Nós nunca usaremos seus dados de forma a extrapolar
              nosso legítimo interesse como controlador, a não ser que seja
              necessário para cumprimento de uma obrigação legal imposta à
              controladora.
            </p>
          </div>

          <h3 className="politicas-section-title">
            8 - Suas escolhas são importantes para nós!
          </h3>

          <p className="politicas-text">
            Nós estamos comprometidos com o princípio da autodeterminação
            informativa – você no controle dos seus dados! Portanto, as escolhas
            que você faz sobre receber ou não informações sobre nossos produtos
            é importante. Se você não quiser mais receber nossos informativos ou
            promoções, é só selecionar a caixa de opção adequada no formulário
            que é preenchido no momento que coletamos seus dados.
          </p>

          <p className="politicas-text">
            Também é possível se descadastrar a qualquer momento através dos
            seguintes contatos:
          </p>

          <div className="politicas-contact-info">
            <p>
              <strong>Encarregado:</strong> Francis Perini
            </p>
            <p>
              <strong>E-mail:</strong> lgpd@magazinemedica.com.br
            </p>
            <p>
              <strong>Redes sociais:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/francis-perini-4284b22b"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/francis-perini-4284b22b
              </a>
            </p>
          </div>

          <p className="politicas-text">
            Nós não usaremos seus dados pessoais para envio de promoções ou
            atividades de marketing se assim você optar. Contudo, podemos manter
            seus dados em nossa base – porém, fora da lista de envios – por
            motivos legais ou regulatórios.
          </p>

          <h3 className="politicas-section-title">9 - Conhecendo você</h3>

          <p className="politicas-text">
            Para melhor entender você e suas preferências, nós podemos utilizar
            os dados coletados para traçar um determinado perfil, garantindo que
            seja direcionado apenas a conteúdos que realmente façam sentido para
            você. Para isso, nós podemos, eventualmente, utilizar dados sobre
            você obtidos através de terceiros para auxiliar nessa função, desde
            que de acordo com a lei.
          </p>

          <h3 className="politicas-section-title">10 - Seus direitos!</h3>

          <p className="politicas-text">
            A Lei Geral de Proteção de Dados solidificou vários direitos ao
            usuário, entre os quais nós destacamos os seguintes: a qualquer
            momento você
          </p>

          <ul className="politicas-list">
            <li>
              Direito de acesso aos dados, confirmação de existência de
              tratamento e correção de dados incompletos: você tem o direito de
              acessar os dados que temos sobre você, se existe o tratamento de
              dados, quais dados compõem a nossa base e correção de dados
              eventualmente errôneos ou incompletos;
            </li>
            <li>
              Eliminação dos dados: a qualquer momento é possível nos requisitar
              a eliminação dos dados pessoais que temos sobre você;
            </li>
            <li>Revogar o consentimento a qualquer tempo;</li>
            <li>Direito de petição.</li>
          </ul>

          <p className="politicas-text">
            Esses direitos e os demais previstos nos arts. 17 a 21 da Lei Geral
            de Proteção de Dados podem ser exercidos junto à Magazine Médica
            e/ou Grupo Ballke a qualquer momento, através do seguinte endereço:
          </p>

          <p className="politicas-text">
            <strong>lgpd@magazinemedica.com.br</strong>
          </p>

          <h3 className="politicas-section-title">11 - Segurança da informação</h3>

          <p className="politicas-text">
            Quando você nos fornece seus dados pessoais, nós tomamos medidas para
            garantir a integridade dos mesmos, mantendo um sistema técnico e
            organizacional adequado para a proteção do banco de dados.
          </p>

          <p className="politicas-text">
            As informações relativas a pagamento, por exemplo, são criptografadas
            e enviadas para o nosso sistema para uso único e exclusivo para o
            processamento dos pedidos realizados.
          </p>

          <p className="politicas-text">
            Com relação à segurança no tráfego de dados, toda transação que
            envolver pagamento, seja por cartão de crédito ou não, estará
            criptografada com a tecnologia SSL (Secure Socket Layer). Isso
            significa que só a loja tem acesso a estes dados. Quando você
            preenche os dados e nos envia, eles são criptografados. Isso faz com
            que durante o trajeto pela Internet fiquem irreconhecíveis,
            assegurando a confidencialidade. Nós utilizamos o Certificado SSL
            com criptografia de até 256 bits, que oferece mais segurança aos
            acessos.
          </p>

          <p className="politicas-text">
            Se você utilizar um navegador de última geração, este certificado faz
            com que a barra de endereços exiba os detalhes do certificado
            (cadeado), nas páginas acessadas com https://. Além disso, a barra
            fica alterada para a cor verde nos principais navegadores, sendo que
            na versões mais antigas do Internet Explorer a indicação do (cadeado)
            encontra-se na barra inferior do navegador.
          </p>

          <p className="politicas-text">
            Caso a barra apresente cor diferente, verifique as atualizações de
            segurança do seu sistema operacional e do navegador do seu
            computador.
          </p>

          <p className="politicas-text">
            É importante dizer que os dados pessoais que são transmitidos pela
            rede nunca estão 100% seguros, já que todos os sistemas possuem
            vulnerabilidade. Por conta disso, em que pese todos os nossos
            esforços técnicos para garantir a segurança dos seus dados, não é
            possível garantir que seus dados estão totalmente seguros.
          </p>

          <p className="politicas-text">
            Além disso, nunca compartilhe sua senha com terceiros. Nós não
            pedimos para compartilhar sua senha.
          </p>

          <h3 className="politicas-section-title">
            12 - Mantenha seus dados atualizados
          </h3>

          <p className="politicas-text">
            Nós nos preocupamos com a segurança e integridade dos seus dados.
            Para isso, além de dispor de um banco de dados alinhado à legislação
            vigente, mantemos nossos cadastros atualizados sempre que possível
            para não entregar conteúdo que não seja alinhado aos nosso interesse
            legítimo e ao seu interesse.
          </p>

          <p className="politicas-text">
            Por isso, pedimos que, sempre que possível, você mantenha seu
            cadastro atualizado.
          </p>

          <h3 className="politicas-section-title">13 - Uso de "Cookies"</h3>

          <p className="politicas-text">
            Como muitos outros sites, nós também utilizamos "cookies". "Cookies"
            são pequenos pedaços de informação enviados por uma organização para
            o seu computador e armazenados no seu disco rígido para permitir que
            o site o reconheça quando você o visita. Por exemplo, utilizamos
            cookies para armazenar a sua preferência de país. Isso nos ajuda a
            oferecer um serviço mais personalizado quando você navega em nosso
            site e melhorar nossos serviços.
          </p>

          <p className="politicas-text">
            Você pode desativar os "cookies" a qualquer hora. Porém, isso pode
            resultar em perda de funcionalidade do nosso site.
          </p>

          <h3 className="politicas-section-title">14 - Redes sociais</h3>

          <p className="politicas-text">
            Se você usa as redes sociais ou visita nosso site, nós podemos,
            eventualmente, enviar conteúdo a você que consideramos ser
            interessante, baseado no seu engajamento anterior conosco. Isso é
            feito através do uso de "cookies".
          </p>

          <p className="politicas-text">
            Nós também podemos, eventualmente, fazer uso desses "cookies" para
            criar um perfil dos usuários, buscando individualizar seus
            interesses e enviar apenas conteúdo que faça sentido para você.
          </p>

          <h3 className="politicas-section-title">15 - Links para outros sites</h3>

          <p className="politicas-text">
            Nosso site contém links que o direcionam a outros websites. Contudo,
            essa política de privacidade se aplica apenas à Magazine Médica e
            Grupo Ballke, portanto, nós o encorajamos a ler as políticas de
            privacidade dos sites parceiros que você visita. Nós não podemos nos
            responsabilizar pelas políticas de privacidade de outros sites mesmo
            que você seja direcionado até eles através do nosso site.
          </p>

          <p className="politicas-text">
            Por isso, recomendamos que você sempre leia as políticas de
            privacidade dos sites que visita.
          </p>

          <h3 className="politicas-section-title">16 - Crianças e Adolescentes</h3>

          <p className="politicas-text">
            Considerando o Estatuto da Criança e Adolescente e a Lei Geral de
            Proteção de Dados, se você tem menos de 18 anos,{" "}
            <strong>
              somente nos forneça dados pessoais com a autorização dos seus pais
              ou responsáveis.
            </strong>
          </p>

          <p className="politicas-text">
            Os dados pessoais de menores não serão coletados, a menos que haja
            efetiva necessidade para a realização da operação de compra dos
            produtos em nosso site, com sua imediata exclusão após a conclusão.
          </p>

          <h3 className="politicas-section-title">
            17 - Transferência Internacional de Dados
          </h3>

          <p className="politicas-text">
            Como parte dos serviços oferecidos a você, os dados pessoais que você
            nos fornece podem ser transferidos para países estrangeiros. Por
            exemplo, isso pode acontecer se algum dos nossos servidores estiver
            localizado nos EUA ou países membros da União Europeia. Você deve
            estar ciente de que esses países podem não ter leis de proteção de
            dados semelhantes à lei brasileira.
          </p>

          <p className="politicas-text">
            Ao submeter os seus dados pessoais, você concorda com esta
            transferência, armazenamento ou processamento, sendo que a
            transferência se dará com base no art. 33, VIII da Lei 13.709/2018.
          </p>

          <p className="politicas-text">
            Se transferirmos as suas informações para fora do Brasil desta forma,
            tomaremos as medidas necessárias para garantir que as providências
            de segurança apropriadas serão tomadas com o objetivo de garantir que
            os seus direitos continuem a ser protegidos conforme descrito nesta
            política e na Lei 13.709/2018.
          </p>

          <p className="politicas-text">
            Realizamos revisões regulares de quem tem acesso aos dados que
            possuímos para garantir que os mesmos só são acessíveis por pessoal
            devidamente treinado e com conhecimento da nossa legislação de
            proteção de dados.
          </p>

          <h3 className="politicas-section-title">
            18 - Mudanças e Revisões da Política de Privacidade
          </h3>

          <p className="politicas-text">
            Quaisquer alterações na nossa política de privacidade serão publicadas
            no nosso website e informadas via e-mail. Se fizermos quaisquer
            alterações significativas, vamos deixar isso claro. Também fazemos
            revisões regulares da nossa política conforme a evolução da matéria.
          </p>
        </div>
      </section>
    </>
  );
}

export default PoliticasPage;