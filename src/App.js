import * as React from "react";
import { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ms-slideLeftOut40">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">David Paul Silverstone</h1>
            <h2>A Dreamer on the Quantum Computing Horizon</h2>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <br />
        <Fabric>
          <DefaultButton>
            I am a button.
          </DefaultButton>
        </Fabric>
      </div>
    );
  }
}

export default App;
