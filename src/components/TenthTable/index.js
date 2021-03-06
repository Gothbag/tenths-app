import React from "react";
import PropTypes from "prop-types";
import { Cell, Column, Table } from "@blueprintjs/table";
import moment from "moment";

import "./TenthTable.css";

import { listConsts } from "../../reducers/lists";

const { TENTHS } = listConsts;

class TenthTable extends React.PureComponent {

	static propTypes = {
    	[TENTHS]: PropTypes.arrayOf(PropTypes.shape({}))
	}

	static defaultProps = {
    	[TENTHS]: []
	}

	timeCellRenderer = (rowIndex: number) => <Cell>{moment(this.props[TENTHS][rowIndex].time).format("dddd, MMMM Do YYYY, HH:mm:ss.SSS")}</Cell>;

	valCellRenderer = (rowIndex: number) => <Cell>{this.props[TENTHS][rowIndex].val}</Cell>;

	render() {
		const { props: { [TENTHS]: tenths }, timeCellRenderer, valCellRenderer } = this;

		return (<div className="tenth-table">
			<Table numRows={tenths.length} columnWidths={[300, 800]}>
			    <Column name="Time" cellRenderer={timeCellRenderer}/>
			    <Column name="Tenth of a second" cellRenderer={valCellRenderer}/>
			</Table>
		</div>);
	}
}

export default TenthTable;
