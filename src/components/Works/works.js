import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/project/p1.png";
import Portfolio2 from "../../assets/project/p2.png";
import Portfolio3 from "../../assets/project/p3.png";
import Portfolio4 from "../../assets/project/p4.png";
// import Portfolio5 from "../../assets/portfolio-5.png";
// import Portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Works</h2>
      <span className="workDesc">
        I take pride in paying attentation to the smallest details
      </span>
      <div className="worksImgs">
        <a
          href="https://text-to-speech-all.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio1} alt="Portfolio1" className="workImg" />
        </a>
        <a
          href="https://nsocialmedia.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio2} alt="Portfolio2" className="workImg" />
        </a>
        <a
          href="https://chattersn.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio3} alt="Portfolio3" className="workImg" />
        </a>
        <a
          href="https://nlinkedinclone.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Portfolio4} alt="Portfolio4" className="workImg" />
        </a>
        {/* <img src={Portfolio5} alt="Portfolio5" className="workImg" />
        <img src={Portfolio6} alt="Portfolio6" className="workImg" /> */}
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
