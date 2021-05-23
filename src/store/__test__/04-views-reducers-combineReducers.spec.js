import { createMainStore } from "../index";
// Make all changes to src/store/index.js

test("add the reducer reduceViews to the combineReducers of the mainReducer", () => {
  // uncomment: import { reduceViews } from "./views/reducers";
  // uncomment: views: reduceViews,
  const store = createMainStore();
  const mainState = store.getState();
  expect(mainState).toMatchObject({ views: [{ name: "Home" }] });
});
