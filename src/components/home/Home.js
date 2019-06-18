import React, { Component } from 'react';
import './Home.css';
import me from '../../assets/images/me.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home_wrapper">
                <div className="home_image">
                    <img className="home_avatar" src={me} alt="Avatar" />
                </div>
                <div className="home_information">
                    <h1>I'm Alexis.</h1>
                    <p>A <code>Computer Systems Engineer</code> with a passion for web and mobile development.</p>
                    <p>
                        In here you'll find some information about me and also some projects I've worked and/or still working on
                        or you could just get my <button className="downloadButton code" onClick={this.downloadCV}>Curriculum Vitae</button> in PDF format
                    </p>
                </div>
            </div>
        );
    }

    downloadCV() {
        window.open(process.env.PUBLIC_URL + 'Alexis Duarte - CV.pdf');
    }
}

export default Home;