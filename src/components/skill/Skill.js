import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as starFull, faStarHalfAlt as starHalf } from '@fortawesome/free-solid-svg-icons'
import { faStar as starEmpty } from '@fortawesome/free-regular-svg-icons'
import './Skill.css';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.drawStars = this.drawStars.bind(this);
    }

    render() {
        return (
            <div className="skill__wrapper">
                <div className="skill_name code ">{this.props.name}</div>
                {this.drawStars()}

            </div>
        );
    }

    drawStars() {
        let stars = null;

        switch (this.props.level) {
            case 'advanced':
                stars = <div className="skill_level">
                    <FontAwesomeIcon className="swing-in-bottom-fwd" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-2" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-3" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-4" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-5" icon={starFull} />
                </div>
                break;
            case 'proficient':
                stars = <div className="skill_level">
                    <FontAwesomeIcon className="swing-in-bottom-fwd" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-2" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-3" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-4" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-5" icon={starHalf} />
                </div>
                break;
            case 'high' :
                stars = <div className="skill_level">
                    <FontAwesomeIcon className="swing-in-bottom-fwd" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-2" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-3" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-4" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-5" icon={starEmpty} />
                </div>
                break;
            case 'good' :
                stars = <div className="skill_level">
                    <FontAwesomeIcon className="swing-in-bottom-fwd" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-2" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-3" icon={starFull} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-4" icon={starHalf} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-5" icon={starEmpty} />
                </div>
                break;
            default:
                stars = <div className="skill_level">
                    <FontAwesomeIcon className="swing-in-bottom-fwd" icon={starEmpty} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-2" icon={starEmpty} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-3" icon={starEmpty} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-4" icon={starEmpty} />
                    <FontAwesomeIcon className="swing-in-bottom-fwd-5" icon={starEmpty} />
                </div>
        }

        return stars;
    }
}

export default Skill;