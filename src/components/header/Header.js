import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, menuOpen: false };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        
        const path = this.props.location.pathname;
        this.routes = [
            <Link key="1" to="/" id="route_home"
                className={`route ${path === "/" ? "active" : ""}`}
                onClick={(e) => this.menuClicked(e, 1)}>Home
        </Link>,
            <Link key="2" to="/resume" id="route_resume"
                className={`route ${path === "/resume" ? "active" : ""}`}
                onClick={(e) => this.menuClicked(e, 2)}>Resume
        </Link>,
            <Link key="3" to="/projects" id="route_projects"
                className={`route ${path === "/projects" ? "active" : ""}`}
                onClick={(e) => this.menuClicked(e, 3)}>Projects
        </Link>,
        ];
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <div>
                <div className="header_grid">
                    <div className="header_box_name">
                        <p className="header_name">Alexis Duarte</p>
                        <p className="header_profession code">SOFTWARE DEVELOPER</p>
                    </div>
                    <div className="header_box_router">
                        {this.getRoutes()}
                    </div>
                </div>
                <div id="routes_container" className="header_box_routes_container">
                    {this.routes}
                </div>
            </div>
        );
    }

    handleChevronClick() {
        const routesContainer = document.getElementById('routes_container');
        routesContainer.classList.toggle('ease-in');

        const caret = document.getElementById('fai_caret');
        caret.classList.toggle('rotate');
    }

    getRoutes() {
        if (this.state.width > 750) {
            const routesContainer = document.getElementById('routes_container');

            routesContainer.classList.remove('ease-in');
            return this.routes;
        } else {
            return (
                <button onClick={() => this.handleChevronClick()} className="fai_caret_button">
                    <FontAwesomeIcon icon={faChevronDown} id="fai_caret" />
                </button>
            );
        }
    }

    menuClicked(event, key) {
        const menus = document.getElementsByClassName("route");
        const id = event.target.id;
        for (let i = 0; i < menus.length; i++) {
            if (menus[i].id === id) {
                menus[i].classList.add("active");
            } else {
                menus[i].classList.remove("active");
            }

        }
    }
}

export default withRouter(Header);
