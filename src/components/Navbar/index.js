import React from "react";
import { NavLink } from "react-router-dom";
import {
    Alignment,
    Button,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";

import "./Navbar.css";

class NavbarWrapper extends React.Component {

	render() {
		return (<Navbar>
		    <NavbarGroup align={Alignment.LEFT}>
		        <NavbarHeading>React Test</NavbarHeading>
		        <NavbarDivider />
		        <NavLink exact to="/" activeClassName="selected"><Button className="bp3-minimal nav-button" text="Home" /></NavLink>
		        <NavLink to="/admin" activeClassName="selected"><Button className="bp3-minimal nav-button" text="Admin" /></NavLink>
		    </NavbarGroup>
		</Navbar>);
	}
}

export default NavbarWrapper;
