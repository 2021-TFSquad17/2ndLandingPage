import { Component } from "react";
import FormContato from "./FormContato/FormContato";

class Contato extends Component {
    render() {
        return (
            <section className="page-section" id="contato">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase text-grey">Contate-nos</h2>
                        <h3 className="section-subheading text-muted sub-grey">Quer apoiar o projeto ou tem alguma dúvida? Preencha o formulário que entraremos em contato com você!</h3>
                    </div>
                    <FormContato/>
                </div>
            </section>
        );
    }
}

export default Contato;