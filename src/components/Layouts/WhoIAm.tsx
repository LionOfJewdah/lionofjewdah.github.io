import * as React from "react";
import "./Layout.css";
import "./Tooltip.css";

import Biography from "./Biography";

import coggers from "../../images/dsilv_coggers.gif";
import me from "../../images/me 300.jpg";
import { SectionTitle } from "../Small Components/SectionTitle";

export class WhoIAm extends React.Component {
	public render() {
		return <section id="AboutMe">
			<SectionTitle className="margin-above-10 pad-above-10 pad-below-5">Who I am</SectionTitle>
			<div className="has-tooltip">
				<img src={me} className="max-25-vw pad-below-20" />
				<span className="tooltip-text serif">Me!</span>
			</div>
			<Biography />
			<img src={coggers} className="pad-above-20"/>
		</section>;
	}
}

export default WhoIAm;
