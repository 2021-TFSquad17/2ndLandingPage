import { Component } from "react";
import TeamImage from "../../assets/img/team/1.jpg";
import Team2 from "./Time2";


class Team extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="time">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Nosso Time</h2>
                        <h3 className="section-subheading text-muted">Squad 17 #Teufuturo</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-2-5">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={TeamImage} alt="..." />
                                <h4>Parveen Anand</h4>
                                <p className="text-muted">Lead Designer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-github"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2-5">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={TeamImage} alt="..." />
                                <h4>Diana Petersen</h4>
                                <p className="text-muted">Lead Marketer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-github"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2-5">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={TeamImage} alt="..." />
                                <h4>Larry Parker</h4>
                                <p className="text-muted">Lead Developer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-github"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2-5">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={TeamImage} alt="..." />
                                <h4>Diana Petersen</h4>
                                <p className="text-muted">Lead Marketer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-github"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2-5">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={TeamImage} alt="..." />
                                <h4>Larry Parker</h4>
                                <p className="text-muted">Lead Developer</p>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-github"></i></a>
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>    
                    </div>
                    <Team2/>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Time responsável pela criação e desenvolvimeto dessa LandinPage, para o #TeuFuturo 2021.</p></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;