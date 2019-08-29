import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User/User';
import UserDetails from './User/UserDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <strong>My name is Jack. I come in peace.</strong>
        <User/>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>HackDaWhitHOus2k19</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
