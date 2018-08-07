import * as React from "react";
import { CompanyProps } from "./Professional/CompanyImage";
import { CompanyImageList } from "./Professional/CompanyImageList";
import SectionTitle from "./Small Components/SectionTitle";

import IBM_Logo from "../images/companies/IBM logo.png";
import MicrosoftLogo from "../images/companies/Microsoft logo.png";
import ViterbiLogo from "../images/companies/Viterbi.jpg";

export interface WorkExperienceProps {
	companies: CompanyProps[];
	greeting: string;
}

export class WorkExperienceSynopsis
	extends React.Component<WorkExperienceProps, {}> {
	public static defaultProps: Partial<WorkExperienceProps> = {
		companies: [
			{
				logo: MicrosoftLogo,
				name: "Microsoft",
				overlayText: "Microsoft: empowering every person and every organization "
					+ "on the planet to achieve more.",
				title: "Microsoft"
			},
			{
				logo: ViterbiLogo,
				name: "USC Viterbi School of Engineering",
				overlayText: "Viterbi School of Engineering: developing human beings "
					+ "and society through the cultivation and "
					+ "enrichment of the human mind and spirit.",
				title: "Viterbi School of Engineering"
			},
			{
				logo: IBM_Logo,
				name: "IBM",
				overlayText: "IBM: putting smart to work.",
				title: "IBM"
			}
		],
		greeting: "Where I've worked"
	};

	public render(): JSX.Element {
		return <section id="IndustryExperience">
			<SectionTitle heading={this.props.greeting} />
			<CompanyImageList companies={this.props.companies} />
		</section >;
	}
}

export default WorkExperienceSynopsis;
