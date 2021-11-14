import TeuFuturoDelasItem from "./TeuFuturoDelasItem/TeuFuturoDelasItem";
import ImagemA from "../../assets/img/portfolio/1.jpg";

function TeuFuturoDelas(){
    const titulos = [
        "titulo1",
        "titulo2",
        "titulo3"
    ];

    const subTitulos = [
        "subTitulo1",
        "subTitulo2",
        "subTitulo3"
    ];

    const icones = [
        ImagemA,
        <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>,
        <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
    ];


        return (
            <section className="page-section" id="teuFuturoDelas">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase title-tf-delas">#TeuFuturo Delas</h2>
                        <h3 className="section-subheading text-muted">#TeuFuturo Delas é um projeto do InovaEdu da IMED com a proposta de impulsionar meninas na carreira de tecnologia, buscando um cenário científico e tecnológico mais equitativo e diverso. Aproximará meninas da área de programação, dando a elas apoio, informação e ferramentas para que consigam estar inseridas nesse contexto. A iniciativa contará com:</h3>
                    </div>
                    <div className="row text-center">
                        <TeuFuturoDelasItem titulo={titulos[0]} subTitulo={subTitulos[0]} icone={icones[0]}/> 
                        <TeuFuturoDelasItem titulo={titulos[1]} subTitulo={subTitulos[1]} icone={icones[1]}/>
                        <TeuFuturoDelasItem titulo={titulos[2]} subTitulo={subTitulos[2]} icone={icones[2]}/>                                                 
                    </div>
                </div>
            </section>
        );
    }

export default TeuFuturoDelas;