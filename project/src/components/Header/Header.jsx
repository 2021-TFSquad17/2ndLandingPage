import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Welcome To Our Studio!</div>
                    <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                    <a className="btn btn-primary btn-xl text-uppercase" href="#teuFuturoDelas">Tell Me More</a>
                </div>
            </header>
        );
    }
}

export default Header;