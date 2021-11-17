import TeuFuturoDelasItem from "./TeuFuturoDelasItem/TeuFuturoDelasItem";
import ImagemA from "../../assets/img/#teufuturo delas/svgTF.svg";
import ImagemB from "../../assets/img/#teufuturo delas/svg-webinar.svg";
import ImagemC from "../../assets/img/#teufuturo delas/bolsas.png";

import Video from "../Vídeo/video";

import "./style.css";

function TeuFuturoDelas() {

    const icones = [
        ImagemA,
        ImagemB,
        ImagemC
    ];

    const teufuturodelasItens = {
        item1: {
            titulo: "Posts e Dicas",
            subTitulo: "Os posts e as dicas de tecnologia serão publicados no Instagram oficial do projeto ",
            icone: icones[0],
            link: <a href="https://www.instagram.com/teufuturodelas/?hl=pt-br">(@teufuturodelas).</a>
        },

        item2: {
            titulo: "Webinars Mensais",
            subTitulo: "Os webinars contarão com convidadas atuantes na área, e serão transmitidos no canal da IMED no YouTube, que você pode acessar clicando ",
            icone: icones[1],
            link: <a href="https://www.youtube.com/c/IMEDOficial">aqui!</a>
        },

        item3: {
            titulo: "Bolsas",
            subTitulo:  "As bolsas serão especialmente para meninas que estão entrando na computação, sendo de 80% (40% patrocinada pela IMED e os outros 40% pelos patrocinadores).",
            icone: icones[2],
            link: ""
        }
    }

    return (
        <section className="page-section" id="teuFuturoDelas">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase title-tf-delas">#TeuFuturo Delas</h2>
                    <h3 className="section-subheading text-muted">#TeuFuturo Delas é um projeto do InovaEdu da IMED com a proposta de impulsionar meninas na carreira de tecnologia, buscando um cenário científico e tecnológico mais equitativo e diverso. Aproximará meninas da área de programação, dando a elas apoio, informação e ferramentas para que consigam estar inseridas nesse contexto. A iniciativa contará com:</h3>
                </div>
                <div className="row text-center teu-futuro-delas-items">
                    {criaItemTeuFuturoDelas(teufuturodelasItens.item1)}
                    {criaItemTeuFuturoDelas(teufuturodelasItens.item2)}
                    {criaItemTeuFuturoDelas(teufuturodelasItens.item3)}
                </div>
                <Video />
            </div>
        </section>
    );
}


function criaItemTeuFuturoDelas(item) {
    return (
        <TeuFuturoDelasItem
            titulo={item.titulo}
            subTitulo={item.subTitulo}
            icone={item.icone}
            link={item.link}
        />
    );
}

export default TeuFuturoDelas;