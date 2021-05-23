import { createMainStore } from "../index";
import { selectViews } from "../views/selectors";
// Make all changes to src/store/views/selectors.js

let store;
beforeEach(() => {
  store = createMainStore();
});

test("add the findView selector function", () => {
  // add: export function selectViews() {}
  expect(selectViews).toEqual(expect.any(Function));
});

test("selectViews returns the field views from the mainState", () => {
  // add: selectViews(mainState) {return mainState.views}
  const mainState = store.getState();
  const views = selectViews(mainState);

  expect(views).toBe(mainState.views);
});
