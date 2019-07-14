import React, {Component} from 'react';
import Project from '../project/Project';
import projects from '../../assets/data/projects.json'
import './Projects.css';

class Projects extends Component {

    // projects =

    render() {
        return (
            <div className="projects_page">
                
                <div className="projects_wrapper">
                    {
                        projects.map((project, index) =>
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