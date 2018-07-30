import React from "react";
import PropTypes from "prop-types";
import { Button, Colors } from "@blueprintjs/core";
import { noop } from "lodash";

class AdminSection extends React.PureComponent {

	static propTypes = {
    	clearTenths: PropTypes.func
	}

	static defaultProps = {
    	clearTenths: noop
    }

	render() {
		const { props: { clearTenths } } = this;
		return (<div className="button-row">
			<Button onClick={clearTenths} text="Clear" style={{background:Colors.RED1, color:Colors.WHITE}} large/>
		</div>);
	}
}

export default AdminSection;
