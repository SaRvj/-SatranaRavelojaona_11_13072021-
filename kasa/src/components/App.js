import "./App.css";
import React from "react";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Home from "./Home/Home.js";
import Accommodation from "./accommodation/Accommodation";
import About from "./about/About";
import Error404 from "./error404/Error404";
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
              <Route path="/" exact component={Home} />
              <Route path="/accommodation" component={Accommodation} />
              <Route path="/about" component={About} />
              <Route path="/" component={Error404} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
