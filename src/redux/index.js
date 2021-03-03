import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const addSearch = (searchText, searchResults) => {
  console.log("hi");
  return {
    type: "ADD_SEARCH",
    history: searchText,
    currentSearch: searchResults,
  };
};

const initialState = {
  history: [],
  currentSearch: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SEARCH":
      return {
        ...state,
        history: [...state.history, action.history],
        currentSearch: action.currentSearch,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
export default store;
