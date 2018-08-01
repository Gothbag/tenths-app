import React from "react";
import PropTypes from "prop-types";
import { Card } from "@blueprintjs/core";

import "./TenthCard.css";

class TenthCard extends React.PureComponent {

	static propTypes = {
		quantity: PropTypes.number.isRequired,
    	val: PropTypes.number.isRequired
	}

	constructor(props){
		super(props);
		this.state = {
			highlighted: false
		};
	}

	componentDidUpdate(prevProps){
		const { props: { quantity } } = this;
		if (prevProps.quantity !== quantity) {
			this.setState({
				highlighted: true
			}, () => {
				setTimeout(() => {
					this.setState({
						highlighted: false
					});
				}, 500)
			})
		}
	}

	render() {
		const { props: { val, quantity }, state: { highlighted } } = this;
		return (<li className="tenth">
			<Card className={highlighted ? "green" : ""}>
			    <h4>Tenth {val}</h4>
			    <p>{quantity}</p>
			</Card>
		</li>);
	}
}

export default TenthCard;
