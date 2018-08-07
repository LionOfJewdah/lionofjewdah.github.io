import * as React from "react";

const resume = "%PUBLIC_URL%/documents/resume.pdf";

export class Navigation extends React.Component {
	public render() {
		return <nav role="navigation">
			<ol className="nav-links">
				<li />
				<li>
					<li className=" youarehere">
						<a href="/" className="you-are-here">
							Home
								</a>
					</li>
				</li>
				<br />
				<li>
					<ol className="nav-links">
						<li className="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">Demos</li>
						<li>
							<a id="resume-link" href={resume}>
								Resume
							</a>
						</li>
						<li>
							<a id="web-resume-link" href="/web_resume">
								Web Resume
							</a>
						</li>
						<li>
							<a id="coursework-link" href="/coursework">
								Coursework
							</a>
						</li>
					</ol>
				</li>
				<br />
				<li id="connect-links">
					<ol className="nav-links">
						<li className="linkedin">
							<a href="https://www.linkedin.com/in/david-silverstone/"
								className="linkedin">Linkedin</a>
						</li>
					</ol>
				</li>
			</ol>
		</nav>;
	}
}

export default Navigation;
