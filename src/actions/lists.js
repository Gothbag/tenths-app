export const listActions = {
  ADD_LIST_ELEMENT: "lists/elements/add",
  CLEAR_LIST_ELEMENTS: "lists/elements/clear"
};

export const addElement = (element, listId) => ({
  type: listActions.ADD_LIST_ELEMENT,
  payload: element,
  listId
});

export const clearElements = listId => ({
  type: listActions.CLEAR_LIST_ELEMENTS,
  listId
});