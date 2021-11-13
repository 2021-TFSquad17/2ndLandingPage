import { Component } from "react";
import PortfolioImage from "../../../assets/img/portfolio/1.jpg";

class SobreItem extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href="#SobreModal1">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={PortfolioImage} alt="..." />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">Threads</div>
                        <div className="portfolio-caption-subheading text-muted">Illustration</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SobreItem;