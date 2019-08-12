import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import Advantages from "./Advantages";
import Contact from "./Contact";
import missionStatement from "./MissionStatement";
import Navigation from "./Navigation";
import Home from "./Home";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Advantages" exact component={Advantages} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/MissionStatement" exact component={missionStatement} />
        </div>
      </Router>
    );
  }
}

export default Main;
