import React, { Component } from 'react';
import Skill from '../skill/Skill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCode, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import 'devicon';
import './Resume.css';

class Resume extends Component {
    skills = {
        'technologies': [
            { name: 'Flutter', level: 'advanced' },
            { name: 'NodeJS', level: 'advanced' },
            { name: 'RDBMS', level: 'advanced' },
            { name: 'Android', level: 'proficient' },
            { name: 'ASP.NET', level: 'proficient' },
            { name: 'Linux', level: 'proficient' },
            { name: 'Git', level: 'proficient' },
            { name: 'Xamarin', level: 'high' },
            { name: 'Firebase', level: 'high' },
            { name: 'React', level: 'good' },
        ],
        'concepts': [
            { name: 'OOP', level: 'advanced' },
            { name: 'Multithreading', level: 'advanced' },
            { name: 'Code Efficiency', level: 'proficient' },
            { name: 'Security', level: 'proficient' },
            { name: 'Networking', level: 'proficient' },
            { name: 'Memory Management', level: 'high' }
        ]
    };

    render() {
        return (
            <div className="resume_wrapper">
                <div className="left">
                    <div className="resume_work">
                        <p className="work_title title"> <FontAwesomeIcon icon={faBriefcase} /> Work Experience</p>
                        <div className="work_content">
                            <div className="work_1">
                                <p className="job_position"><a href="http://equiposysistemas.net">EYS Software</a> <span className="at" /> Mexicali, MX</p>
                                <p className="job_dates">January 2018 - March 2019 <span className="resume_pill">Full Stack Developer</span></p>
                                <p className="job_description">
                                    Worked as a Full Stack Developer using
                                    multiple Microsoft technologies such as ASP.net and Xamarin. I
                                    Also worked with many versions of SQL Server and directly
                                    interacted with clients to get their system's requirements
                            </p>
                                <hr />
                            </div>
                            <div className="work_0">
                                <p className="job_position">FoliosMX <span className="at" /> Mexicali, MX</p>
                                <p className="job_dates">July 2016 - August 2017 <span className="resume_pill">Software Developer</span></p>
                                <p className="job_description">
                                    Startup company where I helped to develop a web application for
                                    billing management with PHP and Javascript
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="resume_education">
                        <p className="education_title title"> <FontAwesomeIcon icon={faGraduationCap} /> Education</p>
                        <div className="education_content">
                            <div className="edu_1">
                                <p className="edu_name"><a href="http://www.itmexicali.edu.mx/">Instituto Tecnológico de Mexicali</a> <span className="at" /> Mexicali, MX</p>
                                <p className="edu_degree">B. E. Computer Systems Engineering</p>
                                <p className="edu_dates">August 2014 - December 2018 <span className="resume_pill">GPA: 96/100</span></p>
                                <p className="edu_description">
                                    Graduated as a Mobile Application Development Specialist;
                                    Participated in multiple programming and robotic contests.
                            </p>
                                <hr />
                            </div>
                            <div className="edu_0">
                                <p className="edu_name"><a href="http://www.cecytebc.edu.mx/">Colegio de Estudios Científicos y Tecnológicos</a> <span className="at" /> Mexicali, MX</p>
                                <p className="edu_degree">Software Developer Technician</p>
                                <p className="edu_dates">August 2014 - December 2018 <span className="resume_pill">GPA: 95/100</span></p>
                                <p className="edu_description">
                                    Graduated with a technical degree as a Software Developer.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="resume_skills">
                        <p className="skills_title title"> <FontAwesomeIcon icon={faPuzzlePiece} className="skill_icon" />  Skills</p>
                        <div className="skills_content">
                            <div className="technologies_skills">
                                <p className="skill_subtitle code">Technologies</p>
                                {
                                    this.skills.technologies.map((skill, index) =>
                                        <Skill key={index} name={skill.name} level={skill.level} />
                                    )
                                }
                            </div>
                            <div className="concept_skills">
                                <p className="skill_subtitle code">Concepts</p>
                                {
                                    this.skills.concepts.map((skill, index) =>
                                        <Skill key={index} name={skill.name} level={skill.level} />
                                    )
                                }
                            </div>
                        </div>

                    </div>
                    <div className="resume_languages">
                        <p className="languages_title title"> <FontAwesomeIcon icon={faCode} className="language_icon" /> Languages</p>
                        <div className="languages_content">
                            <span className="devicon-java-plain-wordmark"
                                onMouseOver={this.addColorToLanguage}
                                onMouseOut={this.removeColorToLanguage}
                                title="Java" />
                            <span className="devicon-javascript-plain"
                                onMouseOver={this.addColorToLanguage}
                                onMouseOut={this.removeColorToLanguage}
                                title="Javascript"
                            />
                            <span className="devicon-csharp-plain-wordmark"
                                onMouseOver={this.addColorToLanguage}
                                onMouseOut={this.removeColorToLanguage}
                                title="C#"
                            />
                            <span className="devicon-mysql-plain-wordmark"
                                onMouseOver={this.addColorToLanguage}
                                onMouseOut={this.removeColorToLanguage}
                                title="MySQL"
                            />
                            <span className="devicon-php-plain"
                                onMouseOver={this.addColorToLanguage}
                                onMouseOut={this.removeColorToLanguage}
                                title="PHP"
                            />
                            <span className="devicon-c-plain-wordmark"
                                onMouseOver={this.addColorToLanguage}
                                onMouseOut={this.removeColorToLanguage}
                                title="C"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addColorToLanguage(event) {
        const languageSpan = event.target;
        languageSpan.classList.add('colored');
    }

    removeColorToLanguage(event) {
        const languageSpan = event.target;
        languageSpan.classList.remove('colored');

    }
}

export default Resume;