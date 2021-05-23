import {
  floodTheWorld,
  unleashTheDragons,
  teleportTheBank,
} from "../../data/schemes";
import { schemeAdded } from "../schemes/actions";
import { createMainStore } from "../index";
// Create the file, and changes to, src/store/schemes/reducers.js
// Also changes to, src/store/index.js
// hint: look to the test villains-reducers for more hints

let store;
beforeEach(() => {
  store = createMainStore();
});

test("there are no schemes in the beggining (empty list)", () => {
  // hint: create the reducer with initial state, export, and import into combineReducers
  const mainState = store.getState();
  expect(mainState).toMatchObject({ schemes: [] });
});

test("the action SCHEME_ADDED makes the reducer appends one scheme to the list", () => {
  // hint: add the switch, the case for SCHEME_ADDED, and its reduceSchemeAdded
  store.dispatch(schemeAdded(floodTheWorld));

  const mainState = store.getState();
  expect(mainState).toMatchObject({ schemes: [floodTheWorld] });
});

test("EXPECTED TO PASS: push multiple schemes", () => {
  store.dispatch(schemeAdded(floodTheWorld));
  store.dispatch(schemeAdded(unleashTheDragons));
  store.dispatch(schemeAdded(teleportTheBank));

  const mainState = store.getState();
  expect(mainState).toMatchObject({
    schemes: [floodTheWorld, unleashTheDragons, teleportTheBank],
  });
});

test("EXPECTED TO PASS: sanity check: the action creates a new copy of the state, and the old does not changes", () => {
  const mainState0 = store.getState();
  const schemesState0Copy = [...mainState0.schemes];
  store.dispatch(schemeAdded(floodTheWorld));

  // hint: verify that you copy the state
  expect(mainState0.schemes).toEqual(schemesState0Copy);
});
