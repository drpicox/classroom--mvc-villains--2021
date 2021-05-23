import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
// import { reduceViews } from "./views/reducers";

const mainReducer = combineReducers({
  // views: reduceViews,
  removeme: () => "removeme",
});

export function createMainStore(initialMainState) {
  return createStore(mainReducer, initialMainState, devToolsEnhancer());
}
