import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Container from '../container/Container';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { menu: 'home', key: 1 };
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Router>
            <Header />
            <Container />
          </Router>
          <Footer />
        </div>
      </Router>
    );
  }

  onMenuClick(menu, key) {
    this.setState({ menu: menu, key: key });
  }

  drawAppContent() {
    switch (this.state.key) {
      case 2: return this.resumePage;
      case 1:
      default:
        return this.homePage;
    }
  }
}

export default App;
