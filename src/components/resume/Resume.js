import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import './Resume.css';

class Resume extends Component {
    render() {
        return (
            <div className="resume_wrapper">
                <div className="resume_work">
                    <p className="work_title title">Work Experience <FontAwesomeIcon icon={faBriefcase} /></p>
                    <div className="work_content">
                        <div className="work_1">
                            <p className="job_position">Full Stack Developer - <a href="http://equiposysistemas.net">EYS Software</a></p>
                            <p className="job_dates">January 2018 - March 2019</p>
                            <p className="job_description">
                                Worked as a Full Stack Developer using
                                multiple Microsoft technologies such as ASP.net and Xamarin. I
                                Also worked with many versions of SQL Server and directly
                                interacted with clients to get their system's requirements
                            </p>
                            <hr />
                        </div>
                        <div className="work_0">
                            <p className="job_position">Full Stack Developer - FoliosMX</p>
                            <p className="job_dates">July 2016 - Augist 2017</p>
                            <p className="job_description">
                                Startup company where I helped to develop a web application for
                                billing management with PHP and Javascript
                            </p>
                        </div>
                    </div>
                </div>
                <div className="resume_education">
                    <p className="education_title title">Education <FontAwesomeIcon icon={faGraduationCap} /></p>

                </div>
                <div className="resume_skills">
                    <p className="skills_title title">Skills</p>

                </div>
                <div className="resume_languages">
                    <p className="languages_title title">Languages</p>

                </div>
            </div>
        );
    }
}

export default Resume;