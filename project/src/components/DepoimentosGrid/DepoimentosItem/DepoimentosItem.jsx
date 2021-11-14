function DepoimentosItem({depoimentosImagem,depoimentosLink,depoimentosTitulo,depoimentosSubTitulo}){
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href={"#" + depoimentosLink}>
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={depoimentosImagem} alt="..." />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{depoimentosTitulo}</div>
                        <div className="portfolio-caption-subheading text-muted">{depoimentosSubTitulo}</div>
                    </div>
                </div>
            </div>
        );
    }

export default DepoimentosItem;