import * as React from "react";
import { Glyphicon, Image, MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

import githubIcon from "../images/icons/github small.png";
import linkedinIcon from "../images/icons/linkedin.png";
import "./MyNavbar.css";

import cv from "../documents/David Silverstone CV.pdf";
import resume from "../documents/resume.pdf";

const linkedinProfile = "https://www.linkedin.com/in/david-silverstone/";
const githubProfile = "https://github.com/LionOfJewdah";

export class MyNavbar extends React.Component {
	public render() {
		return <Navbar brand="dsilv.io" inverse={true} fixedTop={true} fluid={true}
			className="serif" role="nav">
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/">https://dsilv.io <Glyphicon glyph="home" /></a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header >
			<Navbar.Collapse>
				<Nav>
					<NavItem eventKey={1} href={resume}>
						Resume <Glyphicon glyph="file" />
					</NavItem>
					<NavItem eventKey={2} href={cv}>
						Curriculum vitae <Glyphicon glyph="list-alt" />
					</NavItem>
				</Nav>
				<Nav pullRight={true}>
					<NavItem eventKey={1} href={linkedinProfile} className="linkedin icon-then-link">
						<Image src={linkedinIcon} /> LinkedIn
					</NavItem>
					<NavItem eventKey={2} href={githubProfile} className="github icon-then-link">
						<Image src={githubIcon} /> My GitHub
					</NavItem>
					<NavDropdown eventKey={3} title="Coming soon: Projects" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1} className="computer-vision">Agreement validation</MenuItem>
						<MenuItem eventKey={3.2} className="computer-vision IoT">Real-time people counting</MenuItem>
						<MenuItem eventKey={3.3}>Thread-safe data structures</MenuItem>
						<MenuItem divider={true} />
						<MenuItem href="/art" eventKey={3.4}>Art</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>;
	}
}

export default MyNavbar;
