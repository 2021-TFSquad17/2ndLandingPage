import closeModalIcon from "../../assets/img/close-icon.svg"

/*Depoimento imagens */
import DepoimentoItem1 from "../../assets/img/portfolio/1.jpg";
import DepoimentoItem2 from "../../assets/img/portfolio/2.jpg";
import DepoimentoItem3 from "../../assets/img/portfolio/3.jpg";

function DepoimentosModals() {
    const modalImages = [
        DepoimentoItem1,
        DepoimentoItem2,
        DepoimentoItem3

    ];
    return (
        <section className="Depoimento-modals">

            <div className="Depoimento-modal modal fade" id="DepoimentosModal1" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={closeModalIcon} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">Julianne Martins</h2>
                                        <p className="item-intro text-muted">Estudante do programa #TeuFuturo da IMED, Julianne Martins fala sobre o projeto #TeuFuturo Delas e destaca seus diferenciais.</p>
                                        <img className="img-fluid d-block mx-auto" src={modalImages[0]} alt="..." />
                                        <p>"O #TeuFuturo Delas para mim é um projeto incrível pois proporciona um espaço saudável de empoderamento e troca de experiências entre mulheres. Além de incentivar e encorajar as estudantes do #TeuFuturo a seguirem na carreira de computação e apoiarem para que elas continuem. Precisamos de mais projetos como esse, que transformem, de alguma forma, toda essa desigualdade existente nesse universo."</p>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-times me-1"></i>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Depoimento-modal modal fade" id="DepoimentosModal2" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={closeModalIcon} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">Isaura Koch</h2>
                                        <p className="item-intro text-muted">Idealizadora do projeto e desenvolvedora de software na Rede Globo, Isaura Koch nos relata os objetivos do #Teufuturo Delas e como a diversidade é essencial no mercado.</p>
                                        <img className="img-fluid d-block mx-auto" src={modalImages[1]} alt="..." />
                                        <p>"Hoje presenciamos um cenário com participação baixíssima de mulheres na tecnologia [...]. O #TeuFuturo Delas é importante neste contexto, para ofertar um ambiente seguro de troca, e para munir meninas de ferramentas [...] para que elas iniciem e continuem com a carreira tecnológica, promovendo assim a participação feminina na TI, além de promover conversas que propiciam melhoria nos ambientes acadêmicos e empresariais para receber essa diversidade de estudantes. A diversidade também é importante para as empresas, pois as companhias com maior diversidade de gênero têm 21% mais chances de apresentar resultados acima da média do mercado [...]."</p>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-times me-1"></i>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Depoimento-modal modal fade" id="DepoimentosModal3" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src={closeModalIcon} alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">Eduarda Donadel</h2>
                                        <p className="item-intro text-muted">Eduarda Donadel, psicóloga no programa #TeuFuturo da IMED, nos conta a importância do projeto #TeuFuturo Delas.</p>
                                        <img className="img-fluid d-block mx-auto" src={modalImages[2]} alt="..." />
                                        <p>"O #TeuFuturo é um lugar incrível aonde podemos nos desenvolver e aprender, mas o melhor de tudo, nos divertimos muito enquanto fazemos isso. É um momento de união em busca de um objetivo em comum, e nisso entra o #TeuFuturo Delas, que nos possibilita unir ainda mais as gurias nessa incrível área da programação. Todos juntos nessa luta é o mais importante."</p>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-times me-1"></i>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default DepoimentosModals;