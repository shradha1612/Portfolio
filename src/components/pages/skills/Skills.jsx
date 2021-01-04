import React from "react";
import "./Skills.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'fab fa-html5',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'fab fa-css3-alt',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'fab fa-sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'fab fa-js',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'fab fa-react',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'fab fa-node',
      },
      
      {
        skillName: 'npm',
        fontAwesomeClassname: 'fab fa-npm',
      },
      {
        skillName: 'aws',
        fontAwesomeClassname: 'fab fa-aws',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'fas fa-fire',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'fab fa-python',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'fab fa-docker',
      },
    ],
    display: true, // Set false to hide this section, defaults to true
  };

export default function SoftwareSkill() {
  return (
    <div className="skillbody">
        <h1 className="pt-3 text-center pb-3">Skills</h1>
<Row>
    <Col xs={12} md={3}>
        <h2 className="text-center pt-2">Front-end</h2>
    </Col>
    <Col xs={12} md={9}>
    <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills,i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    
    </Col>
</Row>
<Row>
    <Col xs={12} md={3}>
        <h2 className="text-center pt-2">Front-end</h2>
    </Col>
    <Col xs={12} md={9}>
    <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills,i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    
    </Col>
</Row>


     


    </div>
  );
}