import * as React from "react";
import "./Layouts/Layout.css";
import "./Sidebar.css";

export class Sidebar extends React.Component {
	public render() {
		return <div className="right-sidebar js-pinned-right-sidebar">
			<div className="js-sticky-rightnav">
				<nav role="navigation">
					<ol className="nav-links">
						<li />
						<li>
							<li className=" youarehere">
								<a href="/" className="you-are-here">
									Home
								</a>
							</li>
						</li>
						<li>
							<ol className="nav-links">
								<li className="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">Demos</li>
								<li>
									<a id="resume-link" href="/documents/resume.pdf">
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
					</ol>
				</nav>

			</div>
		</div>;
	}
}

export default Sidebar;
