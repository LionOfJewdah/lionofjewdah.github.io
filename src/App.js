import * as React from "react";
import "./App.css";
import logo from "./images/reorg time.png";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";

import { WorkExperienceSynopsis } from "./components/WorkExperienceSynposis";

const Microsoft_logo = "/static/images/Microsoft logo.png";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="ms-slideLeftOut40">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">David Paul Silverstone</h1>
            {/* <h2>A Dreamer on the Quantum Computing Horizon</h2> */}
          </header>
          <p className="App-intro">
            Some content will go here.
	      	</p>
        </div>
        <br />
        <Fabric>
          <DefaultButton>
            I am a button.
		      </DefaultButton>
        </Fabric>
        <br />
        <br />
        <section name="Experience">
          Where I've worked:
		      <br />
          <img class="small-image" src={Microsoft_logo} alt="Microsoft" />
        </section>
      </div>
    );
  }
}

export default App;
