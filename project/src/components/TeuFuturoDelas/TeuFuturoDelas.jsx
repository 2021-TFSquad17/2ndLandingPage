import { Component } from "react";
import TeuFuturoDelasItem from "./TeuFuturoDelasItem/TeuFuturoDelasItem";

class TeuFuturoDelas extends Component {
    render() {
        return (
            <section className="page-section" id="teuFuturoDelas">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">#TeuFuturo Delas</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row text-center">
                        <TeuFuturoDelasItem/> 
                        <TeuFuturoDelasItem/>
                        <TeuFuturoDelasItem/>                                                 
                    </div>
                </div>
            </section>
        );
    }
}

export default TeuFuturoDelas;