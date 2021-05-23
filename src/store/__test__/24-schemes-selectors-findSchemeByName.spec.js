import { floodTheWorld, unleashTheDragons } from "../../data/schemes";
import { createMainStore } from "../index";
import { schemeAdded } from "../schemes/actions";
import { makeSelectSchemeByName } from "../schemes/selectors";
// Changes to src/store/schemes/selectors.js
// hint: look to villains-selectors for more hints

let mainState;
beforeEach(() => {
  const store = createMainStore();
  store.dispatch(schemeAdded(floodTheWorld));
  store.dispatch(schemeAdded(unleashTheDragons));
  mainState = store.getState();
});

test("makeSelectSchemeByName is a function", () => {
  expect(makeSelectSchemeByName).toEqual(expect.any(Function));
});

test("makeSelectSchemeByName returns a function created with memoization", () => {
  const selectSchemeByName = makeSelectSchemeByName();
  expect(selectSchemeByName).toEqual(expect.any(Function));
  expect(selectSchemeByName.recomputations()).toBe(0);
});

test("selectSchemeByName returns a scheme from selectSchemes", () => {
  const selectSchemeByName = makeSelectSchemeByName();
  const found = selectSchemeByName(mainState, { name: "Flood the World" });
  expect(found).toBe(floodTheWorld);
});

test("selectSchemeByName returns the scheme with the corresponding name", () => {
  const selectSchemeByName = makeSelectSchemeByName();
  const found = selectSchemeByName(mainState, { name: "Unleash the Dragons" });
  expect(found).toBe(unleashTheDragons);
});

test("selectSchemeByName returns null if no scheme with that name is added", () => {
  const selectSchemeByName = makeSelectSchemeByName();
  const found = selectSchemeByName(mainState, { name: "End World Hunger" });
  expect(found).toBe(null);
});

test("EXPECTED TO PASS: sanity check: call twice to the selector with the same arguments does not trigger a recomputation", () => {
  const selectSchemeByName = makeSelectSchemeByName();
  selectSchemeByName(mainState, { name: "Flood the World" });
  selectSchemeByName(mainState, { name: "Flood the World" });
  expect(selectSchemeByName.recomputations()).toBe(1);
});
