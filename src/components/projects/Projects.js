import React, {Component} from 'react';
import Project from '../project/Project';
import './Projects.css';

class Projects extends Component {

    projects = [
        {
            name: 'About Me',
            github: 'https://github.com/AlecsisDuarte/about-me',
            playstore: null,
            url: 'https://about-me.alecsisduarte.now.sh',
            description: 'React web page (this actual web page) created to showcase some of my projects and to present myself',
            status: 'active',
        },
        {
            name: 'Products List',
            github: 'https://github.com/AlecsisDuarte/flutter_course',
            playstore: 'https://play.google.com/store/apps/details?id=com.duarte.fluttercourse',
            url: null,
            description: 'Application that allows you to publish your products and also view other users products with their price and position',
            status: 'stalled',
        },
        {
            name: 'Oky',
            github: 'https://github.com/AlecsisDuarte/Oki',
            playstore: null,
            url: null,
            description: 'Drowsiness prevental android application',
            status: 'stalled',
        }
    ];

    render() {
        return (
            <div className="projects_page">
                
                <div className="projects_wrapper">
                    {
                        this.projects.map((project, index) =>
                            <Project key={index} title={project.name} description={project.description}
                                github={project.github} playstore={project.playstore} 
                                url={project.url} status={project.status}/>
                        )
                    }
                </div>
                <p>For more up-to-date projects, you could visit my <a href="https://github.com/AlecsisDuarte?tab=repositories" className="inline_button">Github repositories</a></p>
            </div>
        );
    }
}

export default Projects;