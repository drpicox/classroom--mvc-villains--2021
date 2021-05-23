import { darkHelmet, hankScorpio, muttley } from "../../data/villains";
import { createMainStore } from "../index";
import { villainAdded } from "../villains/actions";
// Create the file, and changes to, src/store/villains/reducers.js
// Also changes to, src/store/index.js

let store;
beforeEach(() => {
  store = createMainStore();
});

test("there are no villains in the beggining", () => {
  // hint: export function reduceVillains to src/store/villains/reducers.js
  // hint: add reduceVillains to the combineReducers at src/store/index.js
  // hint: add initial state [] to reduceVillains
  // hint: make sure that it returns the state
  const mainState = store.getState();
  expect(mainState).toMatchObject({ villains: [] });
});

test("the action VILLAIN_ADDED makes the reducer appends one villain to the list", () => {
  // hint: add function reduceVillainAdded to src/store/villains/reducers.js
  // hint: add switch and case VILLAIN_ADDED
  // hint: do not forget default: return state

  store.dispatch(villainAdded(muttley));

  const mainState = store.getState();
  expect(mainState).toMatchObject({ villains: [muttley] });
});

test("EXPECTED TO PASS: push multiple villains", () => {
  store.dispatch(villainAdded(muttley));
  store.dispatch(villainAdded(darkHelmet));
  store.dispatch(villainAdded(hankScorpio));

  const mainState = store.getState();
  expect(mainState).toMatchObject({
    villains: [muttley, darkHelmet, hankScorpio],
  });
});

test("EXPECTED TO PASS: sanity check: the action creates a new copy of the state, and the old does not changes", () => {
  const mainState0 = store.getState();
  const villainsState0Copy = [...mainState0.villains];
  store.dispatch(villainAdded(muttley));

  // hint: verify that you copy the state
  expect(mainState0.villains).toEqual(villainsState0Copy);
});
