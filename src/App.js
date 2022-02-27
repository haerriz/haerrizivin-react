import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {render} from "react-dom";

class App extends Component {
    constructor() {
        super();
        this.state = {
            string: 'Ivin',
        }
    }
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
                  <p>{this.state.string}</p>
                  <button onClick={() => this.setState({string: 'Unaku laam vanakam solla mudiyadhu'})}>Click me</button>
              </header>
          </div>
      )
  }
}


export default App;
