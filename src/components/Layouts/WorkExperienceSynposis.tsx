import * as React from "react";
import { CompanyProps } from "../professional/CompanyImage";
import { CompanyImageList } from "../professional/CompanyImageList";

export interface WorkExperienceProps {
	companies: CompanyProps[];
	greeting: string;
}

export class WorkExperienceSynopsis
	extends React.Component<WorkExperienceProps, {}> {
	public static defaultProps: Partial<WorkExperienceProps> = {
		companies: [
			{
				logo: "Microsoft logo.png", name: "Microsoft",
				overlayText: "Microsoft: empowering every person and every organization "
					+ "on the planet to achieve more.",
				title: "Microsoft"
			},
			{
				logo: "Viterbi.jpg", name: "USC Viterbi School of Engineering",
				overlayText: "Viterbi School of Engineering: developing human beings "
					+ "and society through the cultivation and "
					+ "enrichment of the human mind and spirit.",
				title: "Viterbi School of Engineering"
			},
			{
				logo: "IBM logo.png", name: "IBM",
				overlayText: "IBM: putting smart to work.",
				title: "IBM"
			}
		],
		greeting: "Where I've worked"
	};

	public render(): JSX.Element {
		return <section id="IndustryExperience">
			<h3>
				{this.props.greeting}
			</h3>
			<CompanyImageList companies={this.props.companies} />
		</section >;
	}
}

export default WorkExperienceSynopsis;
