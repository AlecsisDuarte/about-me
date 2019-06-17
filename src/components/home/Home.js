import React, {Component} from 'react';
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
                    <h1>Hello my name is Alexis.</h1>
                    <p>I'm a <code>Computer Systems Engineer</code> with a passion for web and mobile development.</p>
                    <p>In here you'll find some information about me and also some projects I've worked and/or still working on.</p>
                </div>
            </div>
        );
    }
}

export default Home;