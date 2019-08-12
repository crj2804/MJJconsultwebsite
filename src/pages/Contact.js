import React from "react";
import "../styling/contact.scss";
import axios from "axios";

class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;
    const formData = async () =>
      await axios.post("/contact", {
        name,
        email,
        message
      });
  }

  render() {
    return (
      <div className="forms">
        <h1>Contact Us</h1>
        <form action="/contact" onSubmit={this.handleSubmit} method="post">
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            className="namefield"
            onChange={this.handleChange}
            required
          />
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            className="emailfield"
            onChange={this.handleChange}
            required
          />
          <label for="message"> Message: </label>
          <textarea
            type="text"
            name="message"
            className="messagefield"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
