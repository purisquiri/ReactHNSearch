import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const addSearch = (searchText) => {
  console.log(searchText);
  return {
    type: "ADD_SEARCH",
    payload: searchText,
  };
};

const initialState = {
  history: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SEARCH":
      console.log("hey");
      return {
        ...state,
        history: [action.payload, ...state.history],
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()));
export default store;
