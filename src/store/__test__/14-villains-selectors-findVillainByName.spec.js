import { darkHelmet, muttley } from "../../data/villains";
import { createMainStore } from "../index";
import { villainAdded } from "../villains/actions";
import { makeSelectVillainByName } from "../villains/selectors";
// Changes to src/store/villains/selectors.js

let mainState;
beforeEach(() => {
  const store = createMainStore();
  store.dispatch(villainAdded(muttley));
  store.dispatch(villainAdded(darkHelmet));
  mainState = store.getState();
});

test("makeSelectVillainByName is a function", () => {
  // hint: add export function makeSelectVillainByName() {}
  expect(makeSelectVillainByName).toEqual(expect.any(Function));
});

test("makeSelectVillainByName returns a function created with createSelector", () => {
  // hint: import { createSelector } from 'reselect'
  // hint: return createSelector(() => {});
  const selectVillainByName = makeSelectVillainByName();
  expect(selectVillainByName).toEqual(expect.any(Function));
  expect(selectVillainByName.recomputations()).toBe(0);
});

test("selectVillainByName returns a villain from selectVillains", () => {
  // hint: createSelector(selectVillains, (villains) => {return villains[0]})
  const selectVillainByName = makeSelectVillainByName();
  const found = selectVillainByName(mainState, { name: "Muttley" });
  expect(found).toBe(muttley);
});

test("selectVillainByName returns the villain with the corresponding name", () => {
  // hint: add function selectOptionsName(mainState, {name}){return name} // no export
  // hint: add selectOptionsName as second argument of createSelector
  // hint: add name as second argument of the lambda function
  // hint: search a villain with the name and return it
  const selectVillainByName = makeSelectVillainByName();
  const found = selectVillainByName(mainState, { name: "Dark Helmet" });
  expect(found).toBe(darkHelmet);
});

test("selectVillainByName returns null if no villain with that name is added", () => {
  // hint: add return null
  const selectVillainByName = makeSelectVillainByName();
  const found = selectVillainByName(mainState, { name: "Superman" });
  expect(found).toBe(null);
});

test("EXPECTED TO PASS: sanity check: call twice to the selector with the same arguments does not trigger a recomputation", () => {
  const selectVillainByName = makeSelectVillainByName();
  selectVillainByName(mainState, { name: "Muttley" });
  selectVillainByName(mainState, { name: "Muttley" });
  expect(selectVillainByName.recomputations()).toBe(1);
});
