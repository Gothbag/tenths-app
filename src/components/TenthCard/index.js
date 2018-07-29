import React from "react";
import PropTypes from "prop-types";
import { Card } from "@blueprintjs/core";

class Tenth extends React.PureComponent {

	static propTypes = {
    	numberTenths: PropTypes.arrayOf(PropTypes.number).isRequired
	}

	render() {
		const { props: { val, quantity } } = this;
		return (<Card>
		    <h5>Tenth {val}</h5>
		    <p>{quantity}</p>
		</Card>);
	}
}

export default Tenth;