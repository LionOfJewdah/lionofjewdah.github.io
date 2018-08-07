import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import { MyNavbar } from "./components/MyNavbar";

ReactDOM.render(
	<App />,
	document.getElementById("root") as HTMLElement
);
ReactDOM.render(
	<MyNavbar />,
	document.getElementById("nav") as HTMLElement
);
registerServiceWorker();
