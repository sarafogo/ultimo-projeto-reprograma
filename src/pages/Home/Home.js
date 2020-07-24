import React from 'react';
import { Button } from 'reactstrap';
import sara from '../../images/sara.png';
import Juci from '../../images/juci.png';
import maysa from '../../images/maysa.jpeg';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>


            <section class="first-section">
                <div>
                    <h4 className="oQueE">O que é <mark>assédio sexual</mark>?</h4>
                    <p>Qualquer investida de teor sexual que você considere desrespeitosa e seja feita sem a sua permissão, seja no trabalho, na escola, faculdade, na rua ou em casa é inaceitável e configura uma violência. Todas as abordagens que vão além do limite permitido por você e causam desconforto, vergonha ou intimidação são tipos de assédio. O que diferencia essa prática de uma relação de intimidade é o seu consentimento.</p>
                    <div className="exemplo">
                        <div className="div-container1">

                            <ul className="listaa">
                                <li className="lista">Conversas ou piadas obcenas;</li>
                                <li className="lista">E-mails, mensagens ou ligações de teor sexual;</li>
                                <li className="lista">Assovios, sons inapropriados, insultos ou gestos intimidadores direcionados a você;</li>
                                <li className="lista">Pedidos de favores sexuais em troca de benefícios;</li>
                                <li className="lista">Ser avaliada apenas pelos atributos físicos ou ouvir comentários desrespeitosos sobre como se veste;</li>
                                <li className="lista">Convites constantes para saídas, mesmo que você afirme que não tem interesse;</li>
                                <li className="lista">Olhares ofensivos ou constrangedores;</li>
                                <li className="lista">Violação da sua intimidade e vida sexual;</li>
                                <li className="lista">Perseguições tanto presenciais quanto no ambiente virtual;</li>
                                <li className="lista">Exposição ou reprodução de imagens íntimas suas sem a sua permissão;</li>
                                <li className="lista">Toques não permitidos por você, e que te deixem desconfortável.</li>
                            </ul>
                        </div>
                        <div className="div-container2">
                            <p className="container2-text">Qualquer mulher assediada sexualmente pode registrar boletim de ocorrência em uma delegacia de polícia, preferencialmente na Delegacia da Mulher. Em casos de assédio no trabalho, escola ou faculdade, reúna as evidências e procure um superior imediato. Caso prefira, vá diretamente à área de Recursos Humanos ou à Coordenação da instituição de ensino. A maioria das empresas possui também o canal de Ouvidoria (ou Ombudsman) que recebe e trata denúncias de assédio e abuso de poder.</p>
                        </div>
                    </div>

                    <p className="notYF"> Se essas atitude ou outras fazem você se sentir intimidada, envergonhada ou ameaçada configura assédio. <p>Lembre-se de que se qualquer uma dessas situações acontecer ou se já aconteceu com você,<mark>a culpa nunca será sua.</mark></p></p>

                    <Link to="/maisinformacoes">
                        <Button outline className="btn">Ler mais sobre</Button>{' '}
                    </Link>

                </div>
                <div class="diferenca">
                    <h4>Qual a<mark>diferença</mark>entre assédio e abuso sexual?</h4>
                    <p>O termo abuso sexual é utilizado de forma ampla para categorizar atos de violação sexual em que não há consentimento da outra parte. Fazem parte desse tipo de violência qualquer prática com teor sexual que seja forçada, como a tentativa de estupro, carícias indesejadas e sexo oral forçado.</p>
                    <p>O assédio sexual é um dos tipos de abuso sexual. Nesse caso, não precisa haver contato físico para que haja a agressão. </p>
                </div>
                <div>
                    <h4 className="conexao">O que é o<mark>Conexão Vênus</mark>?</h4>
                    <p>O projeto é dedicado a montar uma cartilha sobre assédios e abusos vividos pelas mulheres todos os dias. Como o assunto é vasto, iremos estudando e adicionando as indformações aos poucos para que nenhum seja tratado de forma superficial. A ideia é manter as mulheres informadas e cientes dos seus direitos.</p>
                </div>
            </section>
            <section class="second-section">
                <h4>Que tal ajudar o projeto?</h4>
                <h5>Só responder esse formulário do Google.</h5>
                <p className="second-section-text">Pra nos é muito importante que todas se sintam ouvidas e por isso queremos fazer a cartilha juntas, com base em vivências reais.</p>
            </section>
            <section>
                <div class="quem-somos">
                    <h5>Quem somos?</h5>
                    <p>O Conexão Vênus surge da revolta de três amigas de como os homens sempre dizem "ah! eu não sabia", e da sociedade passar pano pra isso. </p>
                </div>
                <div class="mulheres">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm text-center" >
                                <img src={Juci} alt="" className="img-mulheres" />
                                <p><mark>Jucinara Rodrigues</mark></p>
                                <p>Arteterapeuta, psicologa, bissexual, viciada em boardgame e militante feminista.</p>
                            </div>
                            <div class="col-sm text-center">
                                <img src={maysa} alt="" className="img-mulheres" />
                                <p><mark>Maysa Caldas</mark></p>
                                <p>Designer, feminista, petlover, melhor cozinheira do norte/nordeste.</p>
                            </div>


                            <div class="col-sm text-center">
                                <img src={sara} alt="" className="img-mulheres" />
                                <p><mark>Sara Fogo</mark></p>
                                <p>Desenvolvedora front-end, militante bissexual-negra-feminista, dançarina nas horas vagas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Home;