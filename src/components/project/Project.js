import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import './Project.css';

class Project extends Component {
    render() {
        return (
            <div className="project">
                <div className="project_title">{this.props.title}</div>
                <div className="project_status">
                    <span className={"status " + this.props.status}>{this.props.status}</span>
                </div>
                <div className="project_links">{this.getLinks()}</div>
                <div className="project_description code">{this.props.description}</div>

            </div>
        );
    }

    getLinks() {
        const links = [];
        if (this.props.github) {
            links.push(
                <a key="github" href={this.props.github} className="project_link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            );
        }
        if (this.props.playstore) {
            links.push(
                <a key="playstore" href={this.props.playstore} className="project_link">
                    <FontAwesomeIcon icon={faGooglePlay} />
                </a>
            );
        }
        if (this.props.url) {
            links.push(
                <a key="url" href={this.props.url} className="project_link">
                    <FontAwesomeIcon icon={faGlobe} />
                </a>
            );
        }
        return links;
    }
}

export default Project;