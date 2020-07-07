import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [errorMsg, setError] = useState(null);

  function onNameChange(event) {
    setName({ name: event.target.value });
  }

  function onEmailChange(event) {
    setEmail({ email: event.target.value });
  }

  function onMessageChange(event) {
    setMessage({ message: event.target.value });
  }

  // const handleSubmit = (event) => {
  //     console.log(event)
  // }
  const errorHandler = (e) => {
    e.preventDefault();
    console.log(email)
    if ((!name || !email || !message) || (!email.email || !name.name || !message.message)) {
      setError("Please fill out one of the missing fields.")
    } else {
        sendFeedback('template_cpfgiItB', {message_html: message.message, from_name: name.name, reply_to: email.email})
        setError(null)
    }
  };

  const sendFeedback = (templateId, vars) => {
    window.emailjs.send(
        'gmail', templateId, vars
    ).then(res => {
        console.log('Sent it')
    })
    .catch(err => console.error(err))
  }
  return (
    <div className="main-area-container">
      <h1 className="area-header">Contact</h1>
      <p className="area-text">
        <form className="contact-form">
          <div className="input-section">
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(event) => onNameChange(event)}
              className="text-input"
            ></input>
          </div>
          <div className="input-section">
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(event) => onEmailChange(event)}
              className="text-input"
            ></input>
          </div>
          <div className="input-section">
            <input
              type="text"
              placeholder="Enter Your Message"
              onChange={(event) => onMessageChange(event)}
              className="text-input tall"
            ></input>
          </div>
          <input
            type="submit"
            onClick={(e) => errorHandler(e)}
            className="submitBtn"
            value="submit"
          ></input>
        </form>
      </p>
      <p className="alert-text hide">{errorMsg}</p>
    </div>
  );
};

export default Contact;
