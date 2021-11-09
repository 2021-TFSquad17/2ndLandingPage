import { Component } from "react";
import ServiceItem from "./ServicesItem/ServiceItem";

class Service extends Component {
    render() {
        return (
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row text-center">
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