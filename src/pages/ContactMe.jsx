import React from "react";
import { ContactMePageWrapper } from "../styles/ContactMeElements";
import mailIcon from "../assets/mail.svg";
const ContactMe = ({ theme }) => {
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
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols="55"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <button>Send Message</button>
      </div>
    </ContactMePageWrapper>
  );
};

export default ContactMe;
