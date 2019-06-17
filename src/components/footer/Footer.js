import React, { Component } from 'react';
import FooterSection from '../footer-section/footer-section';
import { faPhoneAlt, faAt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer_wrapper">
                <div className="box_call">
                    <FooterSection icon={faPhoneAlt} title="Call" content={
                        <a className="footer_phone" href="tel:+1-760-412-1541">760-412-1541</a>
                    } />
                </div>
                <div className="box_contact">
                    <FooterSection icon={faAt} title="Contact" content={
                        <a className="footer_email" href="mailto:alexis.duarte@hotmail.com">alexis.duarte@hotmail.com</a>
                    } />
                </div>
                <div className="box_social">
                    <FooterSection icon={faPlus} title="Follow" content={
                        <div className="footer_badges">
                            <a href='https://linkedin.com/in/alecsisduarte'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href='https://github.com/alecsisduarte'>
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </a>
                            <a href='https://twitter.com//alecsisduarte'>
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                        </div>
                    } />

                </div>
            </div>
        );
    }
}

export default Footer;