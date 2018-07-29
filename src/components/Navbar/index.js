import React from "react";
import {
    Alignment,
    Button,
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
		        <Button className="bp3-minimal" text="Home" />
		    </NavbarGroup>
		</Navbar>);
	}
}

export default NavbarWrapper;
