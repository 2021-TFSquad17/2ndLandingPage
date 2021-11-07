import { Component } from "react";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

class PortfolioGrid extends Component {
    render() {
        return (
            <section class="page-section bg-light" id="portfolio">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Portfolio</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div class="row">
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