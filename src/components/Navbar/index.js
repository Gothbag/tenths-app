import React from "react";
import {
    Alignment,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";

class NavbarWrapper extends React.PureComponent {

	render() {
		return (<Navbar>
		    <NavbarGroup align={Alignment.LEFT}>
		        <NavbarHeading>React Test</NavbarHeading>
		        <NavbarDivider />
		    </NavbarGroup>
		</Navbar>);
	}
}

export default NavbarWrapper;
