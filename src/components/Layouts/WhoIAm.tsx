import * as React from "react";
import "./Layout.css";

import Biography from "./Biography";

const coggers = "/images/dsilv_coggers.gif";
const me = "/images/me 300.jpg";

export class WhoIAm extends React.Component {
	public render() {
		return <section id="AboutMe">
			<h3>Who I am</h3>
			<img src={me} className="max-25-vh" />
			<Biography />
			<img src={coggers} />
		</section>;
	}
}

export default WhoIAm;
