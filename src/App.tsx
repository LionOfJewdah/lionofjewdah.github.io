import * as React from "react";
import "./App.css";

// import "./scripts/MathJax";

import AppIntro from "./components/Layouts/AppIntro";
import MyHeader from "./components/Layouts/Header";
import Navbar from "./components/Navbar";
import PageLayout from "./components/PageLayout";

export class App extends React.Component {
	public render() {
		return (
			<main className="App">
				<Navbar />
				<section id="content">
					<MyHeader />
					<AppIntro message="Entering my last year at USC, then onto Ph.D." />
					<PageLayout />
				</section>
			</main>
		);
	}
}

export default App;
