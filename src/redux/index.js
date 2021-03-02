import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export function addSearch() {
  return (dispatch, getState) => {
    const currentNews = getState();
    if (currentNews % 2 === 0) {
      dispatch({ type: "ADD_SEARCH" });
    } else {
      setTimeout(() => {
        dispatch({ type: "ADD_SEARCH" });
      }, 1500);
    }
  };
}

function reducer(news = 0, action) {
  switch (action.type) {
    case "ADD_SEARCH":
      return news + 1;
    default:
      return news;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
export default store;
