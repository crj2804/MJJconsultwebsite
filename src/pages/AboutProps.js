import React from "react";

export class AboutProps extends React.Component {
  render() {
    const { about, info1, info2 } = this.props;
    return (
      <div className="inline">
        <h2>{about}</h2>
        <p>
          <span>{info1}</span>
        </p>
        <p>
          <span>{info2} </span>
        </p>
      </div>
    );
  }
}
