import * as React from "react";

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/css/bootstrap-theme.css";

import "./App.css";

import MyHeader from "./components/Layouts/MyHeader";
import PageLayout from "./components/PageLayout";
import AppIntro from "./components/Small Components/AppIntro";

export class App extends React.Component {
	public render() {
		return (
			<main className="App">
				<MyHeader />
				<AppIntro>Entering my last year at USC, then onto Ph.D.</AppIntro>
				<PageLayout />
			</main>
		);
	}
}

export default App;
