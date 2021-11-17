import DepoimentosItem from "./DepoimentosItem/DepoimentosItem";

/*DepoimentosItems imagens */
import DepoimentosItem1 from "../../assets/img/portfolio/1.jpg";
import DepoimentosItem2 from "../../assets/img/portfolio/2.jpg";
import DepoimentosItem3 from "../../assets/img/portfolio/3.jpg";

function DepoimentosGrid() {
    const depoimentosImagens = [
        DepoimentosItem1,
        DepoimentosItem2,
        DepoimentosItem3
    ];

    const depoimentos = {
        depoimento1: {
            titulo: "Julianne Martins",
            subTitulo: "Estudante",
            link: "DepoimentosModal1",
            imagem: depoimentosImagens[0]
        },

        depoimento2: {
            titulo: "Isaura Koch",
            subTitulo: "Idealizadora do Projeto",
            link: "DepoimentosModal2",
            imagem: depoimentosImagens[1]
        },

        depoimento3: {
            titulo: "Eduarda Donadel",
            subTitulo: "Psicóloga",
            link: "DepoimentosModal3",
            imagem: depoimentosImagens[2]
        }
    }

    return (
        <section className="page-section bg-light" id="depoimentos">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Depoimentos</h2>
                    <h3 className="section-subheading text-muted">O projeto #TeuFuturo Delas, mesmo recém começando sua trajetória, já impactou positivamente a vida de muitas pessoas. Aqui separamos alguns depoimentos de colaboradoras e alunas que contam sua experiência com o projeto e como ele transformou suas vidas.</h3>
                </div>
                <div className="row">
                   {criarDepoimento(depoimentos.depoimento1)}
                   {criarDepoimento(depoimentos.depoimento2)}
                   {criarDepoimento(depoimentos.depoimento3)}
                </div>
            </div>
        </section>
    );
}

function criarDepoimento(depoimento) {
    return (
        <DepoimentosItem
            titulo={depoimento.titulo}
            subTitulo={depoimento.subTitulo}
            link={depoimento.link}
            imagem={depoimento.imagem}
        />
    );
}

export default DepoimentosGrid;