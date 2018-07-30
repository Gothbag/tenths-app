import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";
import { Button } from "@blueprintjs/core";
import moment from "moment";
import { Colors } from "@blueprintjs/core";

import "./Home.css";

import TenthTable from "../TenthTable";
import NumberTenths from "../NumberTenths";
import { listConsts } from "../../reducers/lists";

const { TENTHS } = listConsts;

class Home extends React.PureComponent {

	static propTypes = {
		addTenth: PropTypes.func,
    	[TENTHS]: PropTypes.arrayOf(PropTypes.shape({}))
	}

	static defaultProps = {
		addTenth: noop,
    	[TENTHS]: []
	}

	handleAddTenth = () => {
		const time = moment();
		const val = Math.floor((time.millisecond() / 100) % 10);
		this.props.addTenth({
			time,
			val
		});
	}

	render() {
		const { handleAddTenth, props: { numberTenths, [TENTHS]: tenths } } = this;
		return (<div>
			<div className="add-tenth-row" large>
				<Button onClick={handleAddTenth} text="Get a Tenth!" style={{background:Colors.BLUE3, color:Colors.WHITE}}/>
			</div>
			<TenthTable tenths={tenths}/>
			<NumberTenths numberTenths={numberTenths}/>
		</div>);
	}
}

export default Home;
