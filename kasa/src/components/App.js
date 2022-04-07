import "./App.css";
import React from "react";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Home from "./Home/Home.js";
import Accommodation from "./FicheLogement/FicheLogement.js";
import About from "./APropos/APropos.js";
import Error404 from "./Error404/Error404.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Ce composant montre et fait le routage de toute l'application

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="main-container">
            <Header />
            <Routes>
              <Route path="/" exact element={`${Home}`} />
              <Route path="/accommodation" element={Accommodation} />
              <Route path="/about" element={About} />
              <Route path="/" element={Error404} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
