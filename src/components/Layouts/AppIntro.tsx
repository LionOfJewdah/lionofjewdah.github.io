import * as React from "react";
import "./Intro.css";

export interface IntroMessage {
	message: string;
}

export class AppIntro extends React.Component<IntroMessage, {}> {
	public render() {
		return <section id="AppIntro">
			<p className="App-intro">
				{this.props.message}
			</p>
			<hr />
		</section>;
	}
}

export default AppIntro;

