import { Component } from "react";
import NavBarLogo from "../../assets/img/logo-teufuturo-delas.png";

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top"><img src={NavBarLogo} alt="..." /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#teuFuturoDelas">#TeuFuturo Delas</a></li>
                            <li className="nav-item"><a className="nav-link" href="#nossaHistoria">Nossa história</a></li>
                            <li className="nav-item"><a className="nav-link" href="#depoimentos">Depoimentos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#time">Time</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;