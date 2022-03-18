import React, { useState } from "react";
import { ContactMePageWrapper } from "../styles/ContactMeElements";
import mailIcon from "../assets/mail.svg";
const ContactMe = ({ theme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleChange = (e) => {
    const id = e.target.id;
    let value = e.target.value;
    if (id === "name") {
      setName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "subject") {
      setSubject(value);
    } else if (id === "body") {
      setBody(value);
    }
  };

  const greetMessages = [
    "Let's create something together 🚀",
    "Don't hesitate to reach out 👋🏻",
    "Share your excitment with me 😁",
    "Get the info you are looking for right away 💡",
    "I'd love to hear from you 🔉",
  ];
  return (
    <ContactMePageWrapper theme={theme}>
      <div className="left-contact">
        <h1>Let's Chat.</h1>
        <h2>
          {greetMessages[Math.floor(Math.random() * greetMessages.length)]}
        </h2>
        <div className="mailContact">
          <img src={mailIcon} alt="email-img" />
          <div>
            <p>Mail me at</p>
            <span className="blue">pahuneshreyas@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="right-contact">
        <h2>Send Me a Message 🚀</h2>
        <div>
          <input
            type="text"
            placeholder="Full name"
            id="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Subject"
            id="subject"
            onChange={handleChange}
          />
          <textarea
            id="body"
            cols="55"
            rows="10"
            placeholder="Message"
            onChange={handleChange}
          ></textarea>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:pahuneshreyas@gmail.com?subject=${subject}&body=${body} %0D%0A%0D%0ASender's Details: %0D%0AEmail: ${email}%0D%0AName: ${name} `}
        >
          Send Message
        </a>
      </div>
    </ContactMePageWrapper>
  );
};

export default ContactMe;
