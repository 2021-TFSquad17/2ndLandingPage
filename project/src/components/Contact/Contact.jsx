import { Component } from "react";
import FormContact from "./FormContact/FormContact";

class Contact extends Component {
    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <FormContact/>
                </div>
            </section>
        );
    }
}

export default Contact;