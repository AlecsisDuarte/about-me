import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown, faSadTear } from '@fortawesome/free-regular-svg-icons';
import './NotFound.css';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = { isFrown: true };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.changeFace(), 500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    changeFace() {
        this.setState({ isFrown: !this.state.isFrown });
    }

    render() {
        return (
            <div className="notfound_wrapper">
                <p className="notfound_title">Page not found</p>
                <p className="notfound_message">You could try any option from above</p>
                <p className="notfound_icon">
                    <FontAwesomeIcon className="notfound_fai" 
                        icon={this.state.isFrown ? faFrown : faSadTear} />
                </p>
            </div>
        );
    }


}

export default NotFound;