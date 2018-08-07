import * as React from "react";
import { CompanyImage, CompanyProps } from "./professional/CompanyImage";
import CompanyImageList from "./professional/CompanyImageList";

export interface WorkExperienceProps {
	greeting: string;
	companies: CompanyProps[];
}

export class WorkExperienceSynopsis
	extends React.Component<WorkExperienceProps, {}> {
	public render() {
		return <section id="companies">
			Where I've worked:
			<br />
			{new CompanyImageList(this.props.companies)}
		</section>;
	}
}

export default WorkExperienceSynopsis;
