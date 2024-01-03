import React from "react";
import "./intro.css";
import bg from "../../assets/profile.png";
import cvImg from "../../assets/hireme.png";
import cv from "../../assets/NayonHalder.pdf";
import hireImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "NayonHalderCV.pdf";
    link.click();
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Nayon</span> Halder
          <br />
          <span class="typing-animation">
            <span>W</span>
            <span>e</span>
            <span>b</span>
            <span>s</span>
            <span>i</span>
            <span>t</span>
            <span>e</span>
            <span> </span>
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r.</span>
          </span>
        </span>
        <p className="introPara">
          I'm a skilled web developer with experience in creating several
          websites.
        </p>
        <div className="button-container">
          <Link className="cvDownload">
            <button className="btn cvBtn" onClick={handleCvDownload}>
              <img src={cvImg} alt="" className="btnImg" /> Download CV
            </button>
          </Link>
          <Link className="hireMe">
            <button className="btn hireBtn">
              <img src={hireImg} alt="" className="btnImg" /> Hire Me
            </button>
          </Link>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
