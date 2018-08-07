import * as React from "react";
import { CompanyImage, CompanyProps } from "../professional/CompanyImage";
import { CompanyImageList } from "../professional/CompanyImageList";

export interface WorkExperienceProps {
	companies: CompanyProps[];
	greeting: string;
}

export class WorkExperienceSynopsis
	extends React.Component<WorkExperienceProps, {}> {
	public static defaultProps: Partial<WorkExperienceProps> = {
		companies: [
			{ logo: "Microsoft logo.png", name: "Microsoft", title: "Microsoft" },
			{
				logo: "Viterbi.jpg", name: "USC Viterbi School of Engineering",
				title: "Viterbi School of Engineering"
			},
			{ logo: "IBM logo.png", name: "IBM", title: "IBM" }
		],
		greeting: "Where I've worked"
	};

	public render(): JSX.Element {
		return <section id="IndustryExperience">
			<h3>
				{this.props.greeting}
			</h3>
			<CompanyImageList companies={this.props.companies}>
				{this.props.companies.map(
					(company) => new CompanyImage(company)
				)}
			</CompanyImageList>
		</section >;
	}
}

export default WorkExperienceSynopsis;
