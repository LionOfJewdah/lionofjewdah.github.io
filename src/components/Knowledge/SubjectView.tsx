import * as React from "react";
import "./Subjects.css";

import { SubjectImage, SubjectVisualProps } from "./SubjectImage";

import { Col, Row } from "react-bootstrap";

export interface SubjectProps {
	name: string;
	figure: SubjectVisualProps;
}

export class SubjectView extends React.Component<SubjectProps, {}> {
	public render() {
		return <Row className="subject-row">
			<Col xs={6} md={4} className="subject-name serif">
				{this.props.name}
			</Col>
			<Col xs={6} md={4}>
				<SubjectImage latex={this.props.figure.latex}
					resource={this.props.figure.resource} />
			</Col>
		</Row>;
	}
}

export default SubjectView;
