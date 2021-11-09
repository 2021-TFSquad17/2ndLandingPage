import { Component } from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

class PortfolioGrid extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <PortfolioItem/>
                        <PortfolioItem/>
                        <PortfolioItem/>
                        <PortfolioItem/>
                        <PortfolioItem/>
                        <PortfolioItem/>                        
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioGrid;