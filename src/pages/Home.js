import React from "react";
import "../styling/home.scss";
import contents from "../contents.json";
import { FrontPageCards } from "./FrontPageCards";

class Home extends React.Component {
  render() {
    return (
      <div
        className="card-container"
        style={{ backgroundColor: "rgba(0,0,0,.6)" }}
      >
        {contents.map(x => (
          <FrontPageCards {...x} />
        ))}
      </div>
    );
  }
}

export default Home;
