import React from 'react';

import './home.css';

const Home = () => {
    return (
        <main>


            <section class="first-section">
                <div>
                    <h4>O que é <mark className="assedio">assédio sexual</mark>?</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime repellendus molestias cupiditate
                    consequuntur repellat temporibus expedita deserunt ut repudiandae aspernatur, sed quo voluptate rem!
                Debitis totam id natus provident et.</p>

                </div>
                <div class="diferenca">
                    <h4>Qual a <mark>diferença</mark> entre assédio e abuso sexual?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque natus ratione magni iusto libero
                    quibusdam, similique, perferendis corporis aut id repudiandae ipsa reiciendis. Laudantium alias
                consectetur voluptates sint ut.</p>
                </div>
                <div>
                    <h4 className="conexao">O que é o Conexão Vênus?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, esse. Voluptatem at eaque, maiores
                    corrupti fugiat est illo deleniti quas, ab corporis hic et dolor esse assumenda perspiciatis repellendus
                nihil.</p>
                </div>
            </section>
            <section class="second-section">
                <h4>Que tal ajudar o projeto?</h4>
                <h5>Só responder esse formulário do Google.</h5>
            </section>
            <section>
                <div class="quem-somos">
                    <h5>Quem somos?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor unde aperiam numquam molestiae
                    animi omnis molestias maxime neque magnam. Voluptates quia error autem unde ullam laboriosam ea?
                Facilis, odit.</p>
                </div>
                <div class="mulheres">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <img src="" alt="" />
                                <p><mark>Jucinara Rodrigues</mark></p>
                            </div>
                            <div class="col-sm">
                                <img src="" alt="" />
                                <p><mark>Maysa Caldas</mark></p>
                            </div>
                            <div class="col-sm">
                                <img src="" alt="" />
                                <p><mark>Sara Fogo</mark></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;