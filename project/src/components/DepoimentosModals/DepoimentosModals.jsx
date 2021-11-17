import DepoimentoItem from "./DepoimentosItem/DepoimentoItem";

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

    const modalsDepoimentos = {
        modal1: {
            titulo: "Julianne Martins",
            subTitulo: "Estudante do programa #TeuFuturo da IMED, Julianne Martins fala sobre o projeto #TeuFuturo Delas e destaca seus diferenciais.",
            link:"DepoimentosModal1",
            imagem: modalImages[0],
            textoDeFala: "O #TeuFuturo Delas para mim é um projeto incrível pois proporciona um espaço saudável de empoderamento e troca de experiências entre mulheres. Além de incentivar e encorajar as estudantes do #TeuFuturo a seguirem na carreira de computação e apoiarem para que elas continuem. Precisamos de mais projetos como esse, que transformem, de alguma forma, toda essa desigualdade existente nesse universo."
        },

        modal2: {
            titulo: "Isaura Koch",
            subTitulo: "Idealizadora do projeto e desenvolvedora de software na Rede Globo, Isaura Koch nos relata os objetivos do #Teufuturo Delas e como a diversidade é essencial no mercado.",
            link:"DepoimentosModal2",
            imagem: modalImages[1],
            textoDeFala: "Hoje presenciamos um cenário com participação baixíssima de mulheres na tecnologia [...]. O #TeuFuturo Delas é importante neste contexto, para ofertar um ambiente seguro de troca, e para munir meninas de ferramentas [...] para que elas iniciem e continuem com a carreira tecnológica, promovendo assim a participação feminina na TI, além de promover conversas que propiciam melhoria nos ambientes acadêmicos e empresariais para receber essa diversidade de estudantes. A diversidade também é importante para as empresas, pois as companhias com maior diversidade de gênero têm 21% mais chances de apresentar resultados acima da média do mercado [...]."
        },

        modal3: {
            titulo: "Eduarda Donadel",
            subTitulo: "Eduarda Donadel, psicóloga no programa #TeuFuturo da IMED, nos conta a importância do projeto #TeuFuturo Delas.",
            link:"DepoimentosModal3",
            imagem: modalImages[2],
            textoDeFala: "O #TeuFuturo é um lugar incrível aonde podemos nos desenvolver e aprender, mas o melhor de tudo, nos divertimos muito enquanto fazemos isso. É um momento de união em busca de um objetivo em comum, e nisso entra o #TeuFuturo Delas, que nos possibilita unir ainda mais as gurias nessa incrível área da programação. Todos juntos nessa luta é o mais importante."
        },
    }

    return (
        <section className="Depoimento-modals">
            {criaModalDepoimento(modalsDepoimentos.modal1)}
            {criaModalDepoimento(modalsDepoimentos.modal2)}
            {criaModalDepoimento(modalsDepoimentos.modal3)}
        </section>
    );
}

function criaModalDepoimento(modalDepoimento){
    return(
        <DepoimentoItem
        titulo={modalDepoimento.titulo}
        subTitulo={modalDepoimento.subTitulo}
        link={modalDepoimento.link}
        imagem={modalDepoimento.imagem}
        textoDeFala={modalDepoimento.textoDeFala}
        />
    );
}

export default DepoimentosModals;