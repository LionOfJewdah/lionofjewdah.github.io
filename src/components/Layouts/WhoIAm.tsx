import * as React from "react";
import "./Layout.css";

const coggers = "/images/dsilv_coggers.gif";
const me = "/images/me 300.jpg";

export class WhoIAm extends React.Component {
	public render() {
		return <section id="AboutMe">
			<h3>Who I am</h3>
			<img src={me} className="max-25-vh" />
			<p>
				I am David Silverstone, a senior studying Computer Engineering and
				Computer Science and minoring in Physics at USC.
			</p>
			<img src={coggers} />
		</section>;
	}
}

export default WhoIAm;
