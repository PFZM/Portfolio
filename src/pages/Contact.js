import React, { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [messagge, setMessagge] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      return setFirstName(value);
    } else if (name === "lastName") {
      return setLastName(value);
    } else if (name === "email") {
      return setEmail(value);
    } else if (name === "message") {
      return setMessagge(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${firstName} ${lastName}! \nYour message has been sent :)`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessagge("");
  };

  return (
    <div className="page">
      <h2 className="title">Contact Me</h2>
      <p className="hi">Hi {firstName}!</p>
      <form className="form">
        <input
          className="input-field"
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          className="input-field"
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          className="input-field"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="....@email.com"
        />
        <textarea
          id="message"
          className="input-field"
          value={messagge}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type your message"
        ></textarea>
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
