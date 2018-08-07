import * as React from "react";
import "./companies.css";

export interface CompanyProps {
	name: string;
	logo: string;
}

export class CompanyImage extends React.Component<CompanyProps, {}> {
	public render() {
		return <div className="company-image">
			<img className="small-image" src={"images/" + this.props.logo} alt={this.props.name} />
			<br />
		</div>;
	}
}

export default CompanyImage;
