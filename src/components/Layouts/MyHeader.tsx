import * as React from "react";
import "./MyHeader.css";

import headerLogo from "../../images/reorg time.png";

export class MyHeader extends React.Component {
	public render() {
		return <header className="App-header">
			<img src={headerLogo} className="App-logo" alt="logo" />
			<h1 className="App-title">David Paul Silverstone</h1>
			<h2 className="App-subtitle">A Dreamer on the Quantum Computing Horizon</h2>
		</header>;
	}
}

export default MyHeader;
