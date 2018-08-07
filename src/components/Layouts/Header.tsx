import * as React from "react";
import "./Header.css";

const logo = "/images/reorg time.png";

export class MyHeader extends React.Component {
	public render() {
		return <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">David Paul Silverstone</h1>
			<h2>A Dreamer on the Quantum Computing Horizon</h2>
		</header>;
	}
}

export default MyHeader;
