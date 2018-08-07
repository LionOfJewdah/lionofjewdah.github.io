import * as React from "react";
import "./Layouts/Layout.css";

import KnowledgeView from "./Knowledge/KnowledgeView";
import WhoIAm from "./Layouts/WhoIAm";
import WorkExperienceSynopsis from "./WorkExperienceSynposis";

export class PageLayout extends React.Component {
	public render() {
		return <article id="layout" className="max-1000-px">
			<WhoIAm /><hr />
			<KnowledgeView /><hr />
			<WorkExperienceSynopsis /><hr />
		</article>;
	}
}

export default PageLayout;
