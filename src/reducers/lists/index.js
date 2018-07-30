import { listActions } from "../../actions/lists";

export const listConsts = {
	TENTHS: "tenths"
};

const baseInitialState = {
    elements: []
};

const initialState = {
	[listConsts.TENTHS]: {...baseInitialState}
};

const elements = (state = [], action) => {
	switch (action.type) {
		case listActions.ADD_LIST_ELEMENT:
			return [...state, action.payload];
		case listActions.CLEAR_LIST_ELEMENTS:
			return [];
		default:
			return state;
	}
};


const elementLists = (state = initialState, action) => {
  	// make sure a list with the given id exists
	if (!state[action.listId] || !action.type) {
		return state;
	}
	const elementList = state[action.listId];
	switch (action.type) {
		case listActions.ADD_LIST_ELEMENT:
		case listActions.CLEAR_LIST_ELEMENTS:
			return {...state, [action.listId]: {...elementList, elements: elements(elementList.elements, action)}};
		default:
			return state;
	}
};

export default elementLists;
