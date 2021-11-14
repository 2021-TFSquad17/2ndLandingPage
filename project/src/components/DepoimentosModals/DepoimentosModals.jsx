import closeModalIcon from "../../assets/img/close-icon.svg"

/*Depoimento imagens */
import DepoimentoItem1 from "../../assets/img/portfolio/1.jpg";
import DepoimentoItem2 from "../../assets/img/portfolio/2.jpg";
import DepoimentoItem3 from "../../assets/img/portfolio/3.jpg";
import DepoimentoItem4 from "../../assets/img/portfolio/4.jpg";
import DepoimentoItem5 from "../../assets/img/portfolio/5.jpg";
import DepoimentoItem6 from "../../assets/img/portfolio/6.jpg";

function DepoimentosModals(){
    const modalImages = [
        DepoimentoItem1,
        DepoimentoItem2,
        DepoimentoItem3,
        DepoimentoItem4,
        DepoimentoItem5,
        DepoimentoItem6,
    ];
        return (
            <section className="Depoimento-modals">

            <div className="Depoimento-modal modal fade" id="SobreModal1" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={closeModalIcon} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src={modalImages[0]} alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="Depoimento-modal modal fade" id="SobreModal2" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={closeModalIcon} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src={modalImages[1]} alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="Depoimento-modal modal fade" id="SobreModal3" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-bs-dismiss="modal"><img src={closeModalIcon} alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src={modalImages[2]} alt="..." />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i className="fas fa-times me-1"></i>
                                        Close Project
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