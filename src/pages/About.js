import React from "react";
import contents from "../contents.json";
import "../styling/home.scss";
import { AboutProps } from "./AboutProps";

class About extends React.Component {
  render() {
    return (
      <div
        className="card-container"
        style={{ backgroundColor: "rgba(0,0,0,.6)" }}
      >
        {contents.map(x => (
          <AboutProps {...x} />
        ))}
      </div>
    );
  }
}

export default About;
