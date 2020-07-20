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
        setError('Sent it')
    })
    .catch(err => setError('something went wrong. try emailing hellocengtralofficial@gmail.com'))
  }
  return (
    <div className="main-area-container">
      <h1 className="area-header">Contact</h1>
      <p className="area-text">
        <form className="contact-form">
          <div className="form-container">
          <div className="input-section">
    <p className="alert-text hide">{errorMsg}</p>
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
          </div>
          <input
            type="submit"
            onClick={(e) => errorHandler(e)}
            className="submitBtn"
            value="send it"
          ></input>
        </form>
      </p>
    </div>
  );
};

export default Contact;
