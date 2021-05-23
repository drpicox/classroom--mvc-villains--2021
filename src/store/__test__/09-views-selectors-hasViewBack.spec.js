import { createMainStore } from "../index";
import { viewPushed } from "../views/actions";
import { selectHasViewBack } from "../views/selectors";
// Make all changes to src/store/views/selectors.js

let store;
beforeEach(() => {
  store = createMainStore();
});

test("add the findView selector function", () => {
  // add: export function selectHasViewBack() {}
  expect(selectHasViewBack).toEqual(expect.any(Function));
});

test("selectHasViewBack returns false when cannot pop views", () => {
  const mainState = store.getState();
  const hasBack = selectHasViewBack(mainState);

  expect(hasBack).toBe(false);
});

test("selectHasViewBack returns true when there are views to pop", () => {
  store.dispatch(viewPushed({ name: "Villains" }));

  const mainState = store.getState();
  const hasBack = selectHasViewBack(mainState);

  expect(hasBack).toBe(true);
});
