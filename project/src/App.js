import React, { Component } from "react";
import './assets/App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import TeuFuturoDelas from "./components/TeuFuturoDelas/TeuFuturoDelas";
import SobreGrid from "./components/SobreGrid/SobreGrid";
import NossaHistoria from "./components/NossaHistoria/NossaHistoria";
import Time from "./components/Time/Time1";
import Apoiadores from "./components/Apoiadores/Apoiadores";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";
import SobreModals from "./components/SobreModals/SobreModals";

class App extends Component {
  render() {
    return (
      <div id="page-top">
          <Navigation/>
          <Header/>
          <TeuFuturoDelas/>
          <SobreGrid/>
          <NossaHistoria/>
          <Time/>
          <Apoiadores/>
          <Contato/>
          <Footer/>
          <SobreModals/>
      </div>
    );
  }
}

export default App;
