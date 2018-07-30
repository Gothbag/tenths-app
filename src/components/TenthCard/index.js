import React from "react";
import PropTypes from "prop-types";
import { Card } from "@blueprintjs/core";

import "./TenthCard.css";

class TenthCard extends React.PureComponent {

	static propTypes = {
		quantity: PropTypes.number.isRequired,
    	val: PropTypes.number.isRequired
	}

	render() {
		const { props: { val, quantity } } = this;
		return (<li className="tenth">
			<Card>
			    <h4>Tenth {val}</h4>
			    <p>{quantity}</p>
			</Card>
		</li>);
	}
}

export default TenthCard;
