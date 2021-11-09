import React, { Component } from "react";
import './assets/App.css';
import Navigation from "./components/Navigation/Navigation";
import Masthead from "./components/Masthead/Masthead";
import Services from "./components/Services/Services";
import PortfolioGrid from "./components/PortfolioGrid/PortifolioGrid";
import About from "./components/About/About";
import Team from "./components/Team/Team1";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PortfolioModals from "./components/PortfolioModals/PortfolioModals";

class App extends Component {
  render() {
    return (
      <div id="page-top">
          <Navigation/>
          <Masthead/>
          <Services/>
          <PortfolioGrid/>
          <About/>
          <Team/>
          <Clients/>
          <Contact/>
          <Footer/>
          <PortfolioModals/>
      </div>
    );
  }
}

export default App;
