import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
// import { reduceViews } from "./views/reducers";
import { reduceAssignments } from "./assignments/reducers";
import { reduceSchemes } from "./schemes/reducers";
import { reduceViews } from "./views/reducers";
import { reduceVillains } from "./villains/reducers";

const mainReducer = combineReducers({
  // views: reduceViews,
  assignments: reduceAssignments,
  schemes: reduceSchemes,
  views: reduceViews,
  villains: reduceVillains,
});

export function createMainStore(initialMainState) {
  return createStore(mainReducer, initialMainState, devToolsEnhancer());
}
