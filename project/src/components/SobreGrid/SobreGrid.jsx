import { Component } from "react";
import SobreItem from "./SobreItem/SobreItem";

class SobreGrid extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="sobre">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Sobre</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <SobreItem/>
                        <SobreItem/>
                        <SobreItem/>
                        <SobreItem/>
                        <SobreItem/>
                        <SobreItem/>                        
                    </div>
                </div>
            </section>
        );
    }
}

export default SobreGrid;