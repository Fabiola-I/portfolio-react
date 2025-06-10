import React from "react";
import skillsData from "../data/skills.json";
import "../styles/skills.css";

const Skills = () => {
  // Split into two: first 5 are technical, rest are professional
  const technicalSkills = skillsData.skills.slice(0, 5);
  const professionalSkills = skillsData.skills.slice(5);

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-column">
          <h3>Technical Skills</h3>
          {technicalSkills.map((category, index) => (
            <div key={index} className="skill-category">
              <h4>{category.category}</h4>
              <ul>
                {category.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills-column">
          <h3>Professional Skills</h3>
          {professionalSkills.map((category, index) => (
            <div key={index} className="skill-category">
              <h4>{category.category}</h4>
              <ul>
                {category.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
