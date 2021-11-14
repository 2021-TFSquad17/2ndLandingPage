import { Component } from "react";


class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Invista naquilo que faz a diferença.</div>
                    <div className="masthead-heading text-uppercase">Invista no futuro.</div>
                    <a className="btn btn-primary btn-xl text-uppercase" href="#teuFuturoDelas">SAIBA MAIS</a>
                </div>
            </header>
        );
    }
}

export default Header;