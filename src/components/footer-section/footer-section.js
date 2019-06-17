import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer-section.css';

class FooterSection extends Component {
    render = () => (
        <table className="footer-section">
            <tbody>

                <tr>
                    <td className="cell_awesome">
                        <FontAwesomeIcon icon={this.props.icon} className="fai_icon" />
                    </td>
                    <td className="cell_info">
                        <p className="info_title">{this.props.title}</p>
                        <div className="info_content">{this.props.content}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default FooterSection;