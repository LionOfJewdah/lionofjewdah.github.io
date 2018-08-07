import * as React from "react";
import { CompanyImage, CompanyProps } from "./CompanyImage";

export interface CompanyImages {
	companies: CompanyProps[];
	className?: string;
}

export class CompanyImageList extends React.Component<CompanyImages, {}> {
	public render() {
		return <section id="companies" className={this.props.className}>
			{this.props.companies.map(
				(company) =>
					<CompanyImage name={company.name} logo={company.logo} key={company.name} />
			)}
		</section>;
	}
}

export default CompanyImageList;
