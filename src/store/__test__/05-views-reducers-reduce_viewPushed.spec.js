import { NO_ACTION } from "./helpers/actions";
import { viewPushed } from "../views/actions";
import { createMainStore } from "../index";
// Make all changes to src/store/views/reducers.js

let store;
beforeEach(() => {
  store = createMainStore();
});

test("make reduceViews push the newView from the received argument when VIEW_PUSHED", () => {
  // add argument: reduceViews(state = initialState, action)
  // add switch: switch (action.type) {
  // add default: return state;
  // add: function reduceViewPushed(state, action) {
  //   const copy = [...state];
  //   copy.push(action.newView);
  //   return copy
  // }
  // add: import { VIEW_PUSHED } from './actions'
  // add: case VIEW_PUSHED: return reduceViewPushed(state, action);
  store.dispatch(viewPushed({ name: "Villains" }));
  const mainState = store.getState();
  expect(mainState).toMatchObject({
    views: [{ name: "Home" }, { name: "Villains" }],
  });
});

test("EXPECTED TO PASS: sanity check: state does not mutate if the action is not expected", () => {
  const mainState0 = store.getState();
  store.dispatch(NO_ACTION);
  const mainState1 = store.getState();

  // hint: verify default: return state, and all case constants are defined
  expect(mainState0).toBe(mainState1);
});

test("EXPECTED TO PASS: sanity check: the action creates a new copy of the state, and the old does not changes", () => {
  const mainState0 = store.getState();
  const viewsState0Copy = [...mainState0.views];
  store.dispatch(viewPushed({ name: "Villains" }));

  // hint: verify that you copy the state
  expect(mainState0.views).toEqual(viewsState0Copy);
});
