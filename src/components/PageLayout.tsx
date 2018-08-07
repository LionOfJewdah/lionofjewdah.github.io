import * as React from "react";
import "./Layouts/Layout.css";

import WhoIAm from "./Layouts/WhoIAm";
import WorkExperienceSynopsis from "./Layouts/WorkExperienceSynposis";

export class PageLayout extends React.Component {
	public render() {
		return <article id="layout" className="max-1000-px">
			<WhoIAm />
			<WorkExperienceSynopsis />
		</article>;
	}
}

export default PageLayout;
