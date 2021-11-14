import { Component } from "react";
import ClientImage from "../../assets/img/logos/microsoft.svg";

class Apoiadores extends Component {
    render() {
        return (
            <div className="py-5"> <h2 className="apoiadores-center"> Apoiadores do Projeto </h2>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={ClientImage} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={ClientImage} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={ClientImage} alt="..." /></a>
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={ClientImage} alt="..." /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Apoiadores;