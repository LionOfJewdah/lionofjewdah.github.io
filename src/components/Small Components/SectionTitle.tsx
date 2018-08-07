import * as React from "react";
import "./SectionTitle.css";

export interface SectionTitleProps {
	heading?: string;
	style?: React.CSSProperties;
	id?: string;
	className?: string;
}

export class SectionTitle extends React.Component<SectionTitleProps, {}> {
	public render() {
		return <h3 style={this.props.style} id={this.props.id}
			className={this.props.className}>{
				this.props.heading || this.props.children
			}</h3>;
	}
}

export default SectionTitle;
