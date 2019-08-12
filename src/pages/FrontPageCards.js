import React from "react";

export class FrontPageCards extends React.Component {
  render() {
    const { title, content } = this.props;
    return (
      <div className="inline">
        <h2>{title}</h2>
        <p>
          <span>{content}</span>
        </p>
      </div>
    );
  }
}
