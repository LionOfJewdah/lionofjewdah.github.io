import * as React from "react";
import "./AppIntro.css";

export interface IntroMessage {
	message?: string;
}

export class AppIntro extends React.Component<IntroMessage, {}> {
	public render() {
		return <section id="AppIntro">
			<p className="App-intro margin-above-20">
				{this.props.message || this.props.children}
			</p>
			<hr />
		</section>;
	}
}

export default AppIntro;

