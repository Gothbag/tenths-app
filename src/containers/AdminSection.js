import { connect } from "react-redux"

import AdminSection from "../components/AdminSection";
import { clearElements } from "../actions/lists";
import { listConsts } from "../reducers/lists";

const { TENTHS } = listConsts;

const mapDispatchToProps = dispatch => ({
    clearTenths: () => dispatch(clearElements(TENTHS))
}); 


export default connect(null, mapDispatchToProps)(AdminSection);
