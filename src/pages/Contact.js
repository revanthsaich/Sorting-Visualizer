import React from "react";
import "./Contact.css";

const users = [
  {
    name: "MARRI RISHITH",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    linkedin: "https://www.linkedin.com/in/rishi-marri-5b3270301/",
    Github: "https://www.github.com/marririshith",
  },
  {
    name: "PREM KUMAR GOUD",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    linkedin: "https://www.linkedin.com/in/bingi-prem-kumar-goud-451a05347",
    Github: "https://www.github.com/premkumar-7979",
  },
];

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="user-cards">
        {users.map((user, idx) => (
          <div className="user-card" key={idx}>
            <img
              src={user.image}
              alt={`${user.name}`}
              className="profile-image"
            />
            <h3>{user.name}</h3>
            <div className="social-links">
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={user.Github} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
