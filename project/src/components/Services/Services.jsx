import { Component } from "react";
import ServiceItem from "./ServicesItem/ServiceItem";

class Service extends Component {
    render() {
        return (
            <section class="page-section" id="services">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Services</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div class="row text-center">
                        <ServiceItem/> 
                        <ServiceItem/>
                        <ServiceItem/>                                                 
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;