import React from "react";
import "../styles/about.css";
import aboutData from "../data/about.json";

function About() {
  const { summary, highlights, personalDetails, interests } = aboutData;

  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <p className="intro">{summary}</p>
      
      <div className="about-grid">
        <div className="left-panel">
          <h3 className="sub-title">Personal Details</h3>
          <ul>
            {Object.entries(personalDetails).map(([label, value], i) => (
              <li key={i}>
                <span className="label">{label}:</span> {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="right-panel">
          <h3 className="sub-title">My Interests</h3>
           <div className="interests">
         {interests.map((item, i) => (
    <div key={i} className="interest">
      <img
        src={`/assets/icons/${item.toLowerCase()}.png`}
        alt={item}
      />
      <span>{item}</span>
    </div>
            ))}
          </div>
        </div>
      </div>

      <ul className="highlights">
        {highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
