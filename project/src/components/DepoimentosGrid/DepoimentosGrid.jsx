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

    const depoimentosLinks = [
        "DepoimentosModal1",
        "DepoimentosModal2",
        "DepoimentosModal3"
    ];

    const depoimentosTitulo = [
        "Titulo1",
        "Titulo2",
        "Titulo3"
    ];

    const depoimentoSubTitulo = [
        "SubTitulo1",
        "SubTitulo2",
        "SubTitulo3"
    ];

    return (
        <section className="page-section bg-light" id="depoimentos">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Depoimentos</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <DepoimentosItem
                        depoimentosImagem={depoimentosImagens[0]}
                        depoimentosLink={depoimentosLinks[0]}
                        depoimentosTitulo={depoimentosTitulo[0]}
                        depoimentosSubTitulo={depoimentoSubTitulo[0]}
                    />

                    <DepoimentosItem
                        depoimentosImagem={depoimentosImagens[1]}
                        depoimentosLink={depoimentosLinks[1]}
                        depoimentosTitulo={depoimentosTitulo[1]}
                        depoimentosSubTitulo={depoimentoSubTitulo[1]}
                    />

                    <DepoimentosItem
                        depoimentosImagem={depoimentosImagens[2]}
                        depoimentosLink={depoimentosLinks[2]}
                        depoimentosTitulo={depoimentosTitulo[2]}
                        depoimentosSubTitulo={depoimentoSubTitulo[2]}
                    />

                </div>
            </div>
        </section>
    );
}

export default DepoimentosGrid;