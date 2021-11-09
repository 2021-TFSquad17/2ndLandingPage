import { Component } from "react";
import TeamImage from "../../assets/img/team/1.jpg";

class Team2 extends Component {
    render() {
        return (
            <section className="page-section bg-light">
                <div className="container">
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
                                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-github-h"></i></a>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
        );
    }
}

export default Team2;