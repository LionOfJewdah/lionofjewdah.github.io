import * as React from "react";

import SectionTitle from "../Small Components/SectionTitle";
import { SubjectProps, SubjectView } from "./SubjectView";

import artchitecture from "../../images/subjects/architecture.jpg";

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
					resource: artchitecture
				},
				name: "Computer architecture"
			}
		]
	};

	public render(): JSX.Element {
		return <section id="subject-knowledge">
			<SectionTitle heading={this.props.greeting} />
			{this.props.subjects.map((subject) =>
				<SubjectView name={subject.name} figure={subject.figure}
					key={subject.name} />
			)}
		</section>;
	}
}

export default KnowledgeView;
