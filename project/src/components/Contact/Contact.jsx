import { Component } from "react";
import FormContact from "./FormContact/FormContact";

class Contact extends Component {
    render() {
        return (
            <section class="page-section" id="contact">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Contact Us</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <FormContact/>
                </div>
            </section>
        );
    }
}

export default Contact;