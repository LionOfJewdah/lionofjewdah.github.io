import * as React from "react";

import SectionTitle from "../Small Components/SectionTitle";
import { SubjectProps, SubjectView } from "./SubjectView";

import { Grid } from "react-bootstrap";

import computerArchitecture from "../../images/subjects/architecture.jpg";
import yoloDetections from "../../images/subjects/computer vision.jpg";

const theMaxwellEquations = [
	"\\( \\nabla \\cdot \\mathbf {E} ={\\frac {\\rho }{\\varepsilon _{0}}}",
	"\\nabla \\cdot \\mathbf {B} =0",
	"\\nabla \\times \\mathbf {E} =-{\\frac {\\partial \\mathbf {B} }{\\partial t}}",
	"\\nabla \\times \\mathbf {B} =\\mu _{0}\\left(\\mathbf {J} +\\varepsilon _{0}{\\frac {\\partial \\mathbf {E} }{\\partial t}}\\right) \\)"
].join("\\\\");

export interface KnowledgeProps {
	greeting: string;
	subjects: SubjectProps[];
}

export class KnowledgeView
	extends React.Component<KnowledgeProps, {}> {
	public static defaultProps: Partial<KnowledgeProps> = {
		greeting: "My background",
		subjects: [
			{
				figure: {
					latex: true,
					resource: "\\(i\\hbar {\\frac {\\partial }{\\partial t}}\\Psi "
						+ "(\\mathbf {r} ,t)=\\left[{\\frac {-\\hbar ^{2}}{2\\mu }}"
						+ "\\nabla ^{2}+V(\\mathbf {r} ,t)\\right]\\Psi (\\mathbf {r} ,t)\\)"
				},
				name: "Quantum Mechanics"
			},
			{
				figure: {
					latex: false,
					resource: computerArchitecture
				},
				name: "Computer Architecture"
			},
			{
				figure: {
					latex: false,
					resource: yoloDetections
				},
				name: "Computer Vision"
			},
			{
				figure: {
					className: "align-center",
					latex: true,
					resource: theMaxwellEquations
				},
				name: "Electricity & Magnetism"
			}
		]
	};

	public render(): JSX.Element {
		return <section id="subject-knowledge">
			<SectionTitle heading={this.props.greeting} />
			<Grid>{
				this.props.subjects.map((subject) =>
					<SubjectView name={subject.name} figure={subject.figure}
						key={subject.name} />
				)
			}</Grid>
		</section>;
	}
}

export default KnowledgeView;
