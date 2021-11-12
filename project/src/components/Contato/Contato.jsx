import { Component } from "react";
import FormContato from "./FormContato/FormContato";

class Contato extends Component {
    render() {
        return (
            <section className="page-section" id="contato">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contate-nos</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <FormContato/>
                </div>
            </section>
        );
    }
}

export default Contato;