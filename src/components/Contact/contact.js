import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import GithubIcon from "../../assets/githublogo.jpg";
import LinkedinIcon from "../../assets/linkedinlogo.png";
import HackerrankIcon from "../../assets/hackerranklogo.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div className="clints">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clintDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
          tempora quas. Labore, accusamus ipsam harum quae sit officiis laborum
          provident possimus facilis laboriosam inventore saepe consectetur
          ullam, explicabo molestias distinctio!
        </p>
        <div className="clintImgs">
          <img src={Walmart} alt="" className="clintImg" />
          <img src={Adobe} alt="" className="clintImg" />
          <img src={Microsoft} alt="" className="clintImg" />
          <img src={Facebook} alt="" className="clintImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          "Let's connect and create something amazing together! Whether you have
          a project idea, a question, or just want to say hello, I'm here. Reach
          out and let's start a conversation. Your thoughts, ideas, and
          collaborations are always welcome!"
        </span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.facebook.com/">
              <img src={FacebookIcon} alt="" className="link" />
            </a>
            <a
              href="https://github.com/nrbnayon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="" className="link" />
            </a>
            <a
              href="https://linkedin.com/in/itsnayon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="" className="link" />
            </a>
            <a
              href="http://www.hackerrank.com/profile/nrbnayon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={HackerrankIcon} alt="" className="link" />
            </a>
            <a href="*">
              <img src={TwitterIcon} alt="" className="link" />
            </a>
            <a href="*">
              <img src={YoutubeIcon} alt="" className="link" />
            </a>
            <a href="*">
              <img src={InstagramIcon} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
