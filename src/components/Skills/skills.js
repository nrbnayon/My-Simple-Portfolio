import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do !</span>
      <span className="skillDesc">
        Hello! 👋 I'm Nayon Halder, a passionate problem solver and coding
        enthusiast. I thrive on tackling coding challenges and have successfully
        solved 100+ problems on HackerRank and URI. My journey here not only
        showcases my expertise in algorithms and data structures but also
        reflects my commitment to continuous learning in the ever-evolving field
        of programming. Let's connect and share our coding adventures!
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Software Developer</h2>
            <p>
              As a seasoned Software Developer specializing in React Native, I
              bring a unique blend of creativity and technical expertise to the
              table. With a passion for crafting cutting-edge mobile
              applications, I thrive on translating innovative ideas into
              captivating user experiences. My proficiency in React Native
              allows me to seamlessly bridge the gap between Android and iOS
              platforms, ensuring a consistent and high-performance app across
              devices. From designing sleek and intuitive interfaces to
              optimizing app performance, I am dedicated to delivering solutions
              that not only meet but exceed expectations. Explore my portfolio
              and witness the fusion of code and creativity, where every line
              brings your mobile app vision to life. Let's embark on a journey
              of innovation together!
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend UI/UX Designer</h2>
            <p>
              Greetings!🎨 Elevate your digital experience with a touch of
              magic! As a Frontend UI/UX Designer, I craft seamless and visually
              stunning interfaces that captivate and engage users from the first
              click. From sleek, intuitive navigation to pixel-perfect design
              elements, I transform ideas into immersive digital journeys. Let's
              create a world where functionality meets aesthetics, where every
              interaction leaves a lasting impression. Join me in the pursuit of
              user-centric design that not only meets expectations but exceeds
              them, turning each visit into an unforgettable adventure. 🚀✨
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Full Stack Web Developer</h2>
            <p>
              As a Full Stack Web Developer specializing in the MERN (MongoDB,
              Express.js, React, Node.js) stack, I possess a comprehensive skill
              set to create dynamic and scalable web applications. From
              designing responsive and intuitive user interfaces with React to
              building robust server-side applications using Node.js and
              Express, I leverage the power of MongoDB for efficient data
              storage and retrieval. With a keen eye for user experience and a
              strong foundation in both front-end and back-end development, I
              bring innovation and functionality to the digital realm, ensuring
              seamless and engaging web experiences for users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
