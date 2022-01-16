import React, { useState } from "react";

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [messagge, setMessagge] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === "firstName" ? setFirstName(value) : setLastName(value);
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
      <p>Hi {firstName}!</p>
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
