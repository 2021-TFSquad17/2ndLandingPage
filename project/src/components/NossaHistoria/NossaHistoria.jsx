/*Imagens nossa história */
import imagensNossaHistoria1 from "../../assets/img/about/1.jpg";
import imagensNossaHistoria2 from "../../assets/img/about/2.jpg";
import imagensNossaHistoria3 from "../../assets/img/about/3.jpg";
import imagensNossaHistoria4 from "../../assets/img/about/4.jpg";

function NossaHistoria(){
    const imagensNossaHistoria =[
        imagensNossaHistoria1,
        imagensNossaHistoria2,
        imagensNossaHistoria3,
        imagensNossaHistoria4,
    ];

        return (
            <section className="page-section" id="nossaHistoria">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Nossa História</h2>
                        <h3 className="section-subheading text-muted">A iniciativa do projeto surgiu através de alguns dados divulgados pelo IBGE e a Sociedade Brasileira de Computação, como:</h3>
                    </div>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={imagensNossaHistoria[0]} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>15%</h4>
                                    <h4 className="subheading">Atualmente as mulheres</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">representam apenas 15% dos estudantes do curso de Ciência da Computação.</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={imagensNossaHistoria[1]} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>20%</h4>
                                    <h4 className="subheading">De todos os profissionais</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">que atuam no mercado de TI, as mulheres representam apenas 20%.</p></div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={imagensNossaHistoria[2]} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>79%</h4>
                                    <h4 className="subheading">De todas as mulheres que</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">ingressam em cursos de Tecnologia da Informação, 79% desistem no primeiro ano.</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-image"><img className="rounded-circle img-fluid" src={imagensNossaHistoria[3]} alt="..." /></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>0,4%</h4>
                                    <h4 className="subheading">Das meninas que gostam</h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">de ciência, tecnologia, engenharia e matemática, apenas 0,4% escolhem estudar Ciência da Computação quando adultas.</p></div>
                            </div>
                        </li>
                        <li className="timeline-inverted" >
                            <div className="timeline-image">
                                <h4>
                                <a className="cont-link" href="#contato">
                                    Apoie
                                    <br />
                                    Nossa
                                    <br />
                                    Causa!
                                </a>
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </section>
        );
    }

export default NossaHistoria;