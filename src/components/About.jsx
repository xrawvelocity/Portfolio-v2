import React, { Component } from "react";

export default class About extends Component {
  showSkills = (skills) => {
    return skills.map((skill) => {
      return (
        <div className="about-skills-list-each">
          <div
            className={`about-skills-list-each-image about-skills-list-each-image-${skill}`}
          ></div>
          <div className="about-skills-list-each-name">
            {skill.charAt(0).toUpperCase() + skill.slice(1)}
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <section className="about">
        <div className="about-story">
          <h2 className="about-story-title">Background</h2>
          <p className="about-story-paragraph">
            Self taugh web developer since June 2019. Attended Ironhack Miami
            Coding Bootcamp from January 2020 to March 2020.
          </p>
        </div>
        <div className="about-picture"></div>
        <div className="about-skills">
          <h2 className="about-skills-title">Skills</h2>
          <div className="about-skills-list">
            {this.showSkills([
              "html",
              "sass",
              "javascript",
              "reactJS",
              "redux",
              "mongoDB",
              "firebase",
              "nodeJS",
              "expressJS",
            ])}
          </div>
        </div>
      </section>
    );
  }
}
