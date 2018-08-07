import * as React from "react";
import "./App.css";

import AppIntro from "./components/Layouts/AppIntro";
import MyHeader from "./components/Layouts/Header";
import PageLayout from "./components/PageLayout";
import Sidebar from "./components/Sidebar";

export class App extends React.Component {
	public render() {
		return (
			<main className="App">
				<Sidebar />
				<section id="content">
					<MyHeader />
					<AppIntro message="I worked for Microsoft this summer, but now I'm trying to get a Ph.D." />
					<PageLayout />
				</section>
			</main>
		);
	}
}

export default App;
