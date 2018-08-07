import * as React from "react";
import "./Knowledge.css";

import { SubjectImage, SubjectVisualProps } from "./SubjectImage";

export interface SubjectProps {
	name: string;
	figure: SubjectVisualProps;
}

export class SubjectView extends React.Component<SubjectProps, {}> {
	public render() {
		return <div className="row subject-row">
			<div className="col-md">
				<span className="subject-name">
					{this.props.name}
				</span>
			</div>
			<div className="col-mnd">
				<SubjectImage latex={this.props.figure.latex}
					resource={this.props.figure.resource} />
			</div>
		</div>;
	}
}

export default SubjectView;
