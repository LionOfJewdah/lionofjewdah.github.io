import * as React from "react";
import { CompanyImage, CompanyProps } from "./CompanyImage";

export class CompanyImageList extends React.Component<CompanyProps[], {}> {
	public render() {
		return <section id="companies">
			{this.props.map(
				(company) => new CompanyImage(company)
			)}
		</section>;
	}
}

export default CompanyImageList;
