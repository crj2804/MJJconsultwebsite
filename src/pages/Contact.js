import React from "react";
import "../styling/contact.scss";
import { InputGroup, FormControl } from "react-bootstrap";

class Contact extends React.Component {
  render() {
    return (
      <div className="forms">
        <h1>Contact Us</h1>
        <form action="httpl://localhost:8080/contact" method="POST">
          <label>Name</label>
          <input type="text" className="namefield" required />
          <label>Email</label>
          <input type="text" className="emailfield" required />
          <label> Message </label>
          <textarea type="text" className="messagefield" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
