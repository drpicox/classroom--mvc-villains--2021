import { createMainStore } from "../index";
import { viewPushed } from "../views/actions";
import { selectTopView } from "../views/selectors";
// Make all changes to src/store/views/selectors.js

let store;
beforeEach(() => {
  store = createMainStore();
});

test("add the selectTopView selector function", () => {
  // add: export function selectTopView() {}
  expect(selectTopView).toEqual(expect.any(Function));
});

test("selectTopView returns the top view of the views", () => {
  const mainState = store.getState();
  const views = selectTopView(mainState);

  expect(views).toBe(mainState.views[0]);
});

test("MAY ALREADY PASS: selectTopView returns the top view of the views even when other views are pushed", () => {
  store.dispatch(viewPushed({ name: "Villains" }));
  store.dispatch(viewPushed({ name: "Villain", villain: "Muttley" }));

  const mainState = store.getState();
  const views = selectTopView(mainState);

  expect(views).toBe(mainState.views[2]);
});
