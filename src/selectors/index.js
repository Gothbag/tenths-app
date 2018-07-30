import {createSelector} from "reselect";
import {times} from "lodash";

import { listConsts } from "../reducers/lists";

const { TENTHS } = listConsts;

const listTenthsSelector = state => state.lists[TENTHS].elements;

const tenZeroArr = times(10, () => 0);

export const numberTenthsSelector = createSelector(
	listTenthsSelector,
	tenths => {
		if (Array.isArray(tenths) && tenths.length) {
			return tenths.reduce((tenthArr, tenth, ind) => {
				tenthArr[tenth.val] += 1;
				return tenthArr;
			}, [...tenZeroArr]);
		}
		return [...tenZeroArr];
	} 
);
