import * as React from "react";
import "./Layout.css";
import "./ToolTips.css";

import Biography from "./Biography";

import coggers from "../../images/dsilv_coggers.gif";
import me from "../../images/me 300.jpg";
import { SectionTitle } from "../Small Components/SectionTitle";

export class WhoIAm extends React.Component {
	public render() {
		return <section id="AboutMe">
			<SectionTitle className="serif">Who I am</SectionTitle>
			<div className="has-tooltip">
				<img src={me} className="max-25-vh" />
				<span className="tooltip-text">Me!</span>
			</div>
			<Biography />
			<img src={coggers} />
		</section>;
	}
}

export default WhoIAm;
