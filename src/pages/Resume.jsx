// put resume in public folder
import React from "react";
import MyResume from "../assets/Resume.pdf";

export default function Resume() {
  return (
    <section>
        <h2 className="resume-header">Resume and Proficiencies</h2>
        <article className="resume-wrapper">
            <h3 className="resume-download">Resume</h3>
                <a 
                href={MyResume}
                download="Resume"
                target="_blank"
                rel="noreferrer"
                >
                <button className="resume-button">Download My Resume</button>
                </a>
            <h3 className="proficiency-header">Front-end Proficiencies</h3>
                <ul className="proficiencies">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>HandlebarsJS</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            <h3 className="proficiency-header">Back-end Proficiencies</h3>
                <ul className="proficiencies">
                    <li>APIs</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>GraphQL</li>
                </ul>
        </article>
    </section>
  );
}