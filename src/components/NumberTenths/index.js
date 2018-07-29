import React from "react";
import PropTypes from "prop-types";

import TenthCard from "../TenthCard";

class NumberTenths extends React.PureComponent {

	static propTypes = {
    	numberTenths: PropTypes.arrayOf(PropTypes.number).isRequired
	}

	renderTenth = (num, ind) => <TenthCard quantity={num} val={ind} key={ind}/>;

	render() {
		const { props: { numberTenths }, renderTenth } = this;
		return (<div>
			{numberTenths.map(renderTenth)}
		</div>);
	}
}

export default NumberTenths;