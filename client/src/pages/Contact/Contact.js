import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="container-2">
      <h1 className="page-header">Contact Me</h1>
      <div className="contact-page">
        <p>
          If you have any questions about starting a career in web-development,
          or you want to work with me, feel free to reach out.
        </p>
        <h1>Email</h1>
        <p>enguyen6208@gmail.com</p>
        <h1>Links</h1>
        <a href="https://linkedin.com/in/evelyn-ngoc-nguyen">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
        <a href="https://github.com/ENguyen25">
          <FontAwesomeIcon icon="fa-brands fa-square-github" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
