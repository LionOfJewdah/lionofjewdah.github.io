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
					<AppIntro message="Entering my last year at USC, then onto Ph.D." />
					<PageLayout />
				</section>
			</main>
		);
	}
}

export default App;
