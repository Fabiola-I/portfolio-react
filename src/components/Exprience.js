import React from "react";
import "../styles/exprience.css";
import experienceData from "../data/exprience.json";

const Experience = () => {
  const { education, work } = experienceData;

  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>

      <div className="education">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="edu-item">
            <h4>{edu.degree}</h4>
            <p>{edu.institution}</p>
            <span>{edu.duration}</span>
          </div>
        ))}
      </div>

      <div className="work">
        <h3>Work Experience</h3>
        {work.map((job, index) => (
          <div key={index} className="work-item">
            <h4>{job.position}</h4>
            <p><strong>{job.company}</strong> - {job.duration}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
