import * as React from "react";

import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

const resume = "/documents/resume.pdf";
const linkedinProfile = "https://www.linkedin.com/in/david-silverstone/";

function goToResume(): void {
	openInNewTab(resume);
}

function openInNewTab(url: string): void {
	const win = window.open(url, '_blank');
	if (win) { win.focus(); }
}


export class MyNavbar extends React.Component {
	public render() {
		return <Navbar brand="dsilv.io" inverse={true} fixedTop={true} fluid={true}
			className="serif" role="nav">
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/">https://dsilv.io</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header >
			<Navbar.Collapse>
				<Nav>
					<NavItem eventKey={1} href={linkedinProfile} className="linkedin">
						LinkedIn
					</NavItem>
					<NavItem eventKey={2}
						onClick={goToResume}
					// href={resume}
					>
						Resume
					</NavItem>
					<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>Action</MenuItem>
						<MenuItem eventKey={3.2}>Another action</MenuItem>
						<MenuItem eventKey={3.3}>Something else here</MenuItem>
						<MenuItem divider={true} />
						<MenuItem eventKey={3.3}>Separated link</MenuItem>
					</NavDropdown>
				</Nav>
				<Nav pullRight={true}>
					<NavItem eventKey={1} href="#">
						Link Right
					</NavItem>
					<NavItem eventKey={2} href="#">
						Link Right
					</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>;
	}
}

export default MyNavbar;
