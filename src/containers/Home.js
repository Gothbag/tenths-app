import { connect } from "react-redux"

import Home from "../components/Home";
import { addElement } from "../actions/lists";
import { listConsts } from "../reducers/lists";
import { numberTenthsSelector } from "../selectors/"

const { TENTHS } = listConsts;

const mapStateToProps = state => {
	const { lists: { [TENTHS]: { elements } } } = state;
	return {
		numberTenths: numberTenthsSelector(state),
	    [TENTHS]: elements
	}; 
}

const mapDispatchToProps = dispatch => ({
    addTenth: tenth => dispatch(addElement(tenth, TENTHS))
}); 


export default connect(mapStateToProps, mapDispatchToProps)(Home);