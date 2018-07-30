import React from "react";
import PropTypes from "prop-types";
import { Classes } from "@blueprintjs/core";

import TenthCard from "../TenthCard";

class NumberTenths extends React.PureComponent {

	static propTypes = {
    	numberTenths: PropTypes.arrayOf(PropTypes.number).isRequired
	}

	renderTenth = (num, ind) => <TenthCard quantity={num} val={ind} key={ind}/>;

	render() {
		const { props: { numberTenths }, renderTenth } = this;
		return (<ul className={Classes.LIST}>
			{numberTenths.map(renderTenth)}
		</ul>);
	}
}

export default NumberTenths;
