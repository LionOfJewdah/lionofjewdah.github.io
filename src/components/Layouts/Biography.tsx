import * as React from "react";
import "./Biography.css";

export class Biography extends React.Component {
	public render() {
		return <article className="bio max-800-px" id="bio">
			<p>
				I am David Silverstone, a senior studying Computer Engineering and
				Computer Science and minoring in Physics at USC.
			</p>
			<p>
				I'm interested in quantum physics, computer architecture,
				machine learning and quantum computing.
			</p>
			<p>
				My background is in computer hardware and software, focused on how
				they work together and cooperate. My emphasis in Physics complements
				my computing interests and helps me understand the "full-stack" of
				computing as a process.
			</p>
			<p>
				I am seeking a Ph.D. Program and Advisor in the field of quantum
				computer architecture and implementation. I hope to be part of a
				revolution in computing, and I recognize that I may need to be a
				pioneer on the quantum computing horizon.
			</p>
			<p>
				As an undergraduate, I aim to understand the process of computing
				from the level of electrons in a semiconductor to machine learning
				and interpreted high-level languages such as Python and JavaScript.
				As a Ph.D. student, I will apply my knowledge to quantum computing
				in the hopes of creating powerful, intuitive, programmer- and hardware
				engineer-friendly paradigms, architectures and experiences that will
				be expressive and familiar while exposing the intriguing power of
				quantum mechanical effects for computation.
			</p>
		</article>;
	}
}

export default Biography;
