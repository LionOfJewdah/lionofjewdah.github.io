import * as React from "react";
import "./Subjects.css";

export interface SubjectVisualProps {
	className?: string;
	latex: boolean;
	resource: string;
}

export class SubjectImage extends React.Component<SubjectVisualProps, {}> {
	public render() {
		return <figure className={(this.props.className || "") + " subject-image-container"}> {
			this.props.latex ?
				<span className="latex">{this.props.resource}</span> :
				<img className="subject-picture" src={this.props.resource} />
		}</figure>;
	}
}

export default SubjectImage;
