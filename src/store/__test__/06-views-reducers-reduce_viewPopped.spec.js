import { viewPushed, viewPopped } from "../views/actions";
import { createMainStore } from "../index";
// Make all changes to src/store/views/reducers.js

let store;
beforeEach(() => {
  store = createMainStore();
});

test("make reduceViews respond to the VIEW_POPPED action", () => {
  // add: import { VIEW_PUSHED, VIEW_POPPED } from './actions'
  // add: case VIEW_POPPED: return reduceViewPopped(state);
  // and implement reduceViewPopped(state);
  store.dispatch(viewPushed({ name: "Villains" }));
  store.dispatch(viewPopped());
  const mainState = store.getState();
  expect(mainState).toMatchObject({
    views: [{ name: "Home" }],
  });
});

test("reduceViews does not pop the last view", () => {
  store.dispatch(viewPopped());
  const mainState = store.getState();
  expect(mainState).toMatchObject({
    views: [{ name: "Home" }],
  });
});

test("MAY ALREADY PASS: reduceViews do not mutate state if cannot pop the last view", () => {
  const mainState0 = store.getState();
  store.dispatch(viewPopped());
  const mainState1 = store.getState();

  // hint: check that reduceViewPopped returns mainState, not copy
  expect(mainState0).toBe(mainState1);
});

test("EXPECTED TO PASS: sanity check: the action creates a new copy of the state, and the old does not changes", () => {
  store.dispatch(viewPushed({ name: "Villains" }));
  const mainState1 = store.getState();
  const viewsState1Copy = [...mainState1.views];
  store.dispatch(viewPopped());

  // hint: verify that you copy the state
  expect(mainState1.views).toEqual(viewsState1Copy);
});
