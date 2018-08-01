import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";
import { Button } from "@blueprintjs/core";
import moment from "moment";
import { Colors } from "@blueprintjs/core";

import TenthTable from "../TenthTable";
import NumberTenths from "../NumberTenths";
import BarChart from "../BarChart";
import { listConsts } from "../../reducers/lists";

const { TENTHS } = listConsts;

class Home extends React.PureComponent {

	static propTypes = {
		addTenth: PropTypes.func,
		numberTenths: PropTypes.arrayOf(PropTypes.number),
    	[TENTHS]: PropTypes.arrayOf(PropTypes.shape({}))
	}

	static defaultProps = {
		addTenth: noop,
		numberTenths: [],
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
			<div className="button-row">
				<Button onClick={handleAddTenth} text="Get a Tenth!" style={{background:Colors.BLUE3, color:Colors.WHITE}} large/>
			</div>
			<TenthTable tenths={tenths}/>
			{Array.isArray(tenths) && tenths.length && <BarChart
				data={numberTenths}
				width={500}
              	height={250}/>}
			<NumberTenths numberTenths={numberTenths}/>
		</div>);
	}
}

export default Home;
