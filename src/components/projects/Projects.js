import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="projects_wrapper">
                <p className="projects_title">Work in progress</p>
                <p className="projects_message">I'll be working on this, just hang on</p>
                <p className="projects_icon">
                    <FontAwesomeIcon className="fa-spin" icon={faCog} />
                </p>
            </div>
        );
    }
}

export default Projects;