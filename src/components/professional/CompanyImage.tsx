import * as React from "react";
import "./Companies.css";

export interface CompanyProps {
	name: string;
	logo: string;
	title?: string;
	overlayText?: string;
}

export class CompanyImage extends React.Component<CompanyProps, {}> {
	public render() {
		return <div className="company-image">
			<img className="small-image with-overlay" src={"/images/" + this.props.logo}
				alt={this.props.name} title={this.props.title} />
			<div className="image-overlay">
				<div className="overlay-text">
					{this.props.overlayText || this.props.title || this.props.name}
				</div>
			</div>
			<br />
		</div>;
	}
}

export default CompanyImage;
