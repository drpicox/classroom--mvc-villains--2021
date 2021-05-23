import { darkHelmet, hankScorpio, muttley } from "../../data/villains";
import { createMainStore } from "../index";
import { villainAdded } from "../villains/actions";
import { makeSelectVillainsByNameLike } from "../villains/selectors";
// Changes to src/store/villains/selectors.js

let mainState;
beforeEach(() => {
  const store = createMainStore();
  store.dispatch(villainAdded(muttley));
  store.dispatch(villainAdded(darkHelmet));
  store.dispatch(villainAdded(hankScorpio));
  mainState = store.getState();
});

test("makeSelectVillainsByNameLike is a function", () => {
  // hint: add export function makeSelectVillainsByNameLike() {}
  expect(makeSelectVillainsByNameLike).toEqual(expect.any(Function));
});

test("makeSelectVillainsByNameLike returns a function created with createSelector", () => {
  // hint: return createSelector(() => {});
  const selectVillainsByNameLike = makeSelectVillainsByNameLike();
  expect(selectVillainsByNameLike).toEqual(expect.any(Function));
  expect(selectVillainsByNameLike.recomputations()).toBe(0);
});

test("selectVillainsByNameLike returns a list of villains from selectVillains", () => {
  // hint: createSelector(selectVillains, (villains) => {return villains})
  const selectVillainsByNameLike = makeSelectVillainsByNameLike();
  const found = selectVillainsByNameLike(mainState, { name: "" });
  expect(found).toEqual(mainState.villains);
});

test.each`
  name          | expected
  ${"Dark"}     | ${[darkHelmet]}
  ${"e"}        | ${[muttley, darkHelmet]}
  ${"a"}        | ${[darkHelmet, hankScorpio]}
  ${"Superman"} | ${[]}
`(
  "selectVillainsByNameLike returns a list of villains whose name contains the options name ($name)",
  ({ name, expected }) => {
    // hint: add selectOptionsName as second argument of createSelector
    // hint: add name as second argument of the lambda function
    // hint: create a result array, and push those villains whose name includes the options name
    const selectVillainsByNameLike = makeSelectVillainsByNameLike();
    const found = selectVillainsByNameLike(mainState, { name });
    expect(found).toEqual(expected);
  }
);

test("special case: if name is empty, it returns directly the array of villains", () => {
  const selectVillainsByNameLike = makeSelectVillainsByNameLike();
  const found = selectVillainsByNameLike(mainState, { name: "" });

  // hint: add an if before the loop to return villains if name is empty
  expect(found).toBe(mainState.villains);
});

test("EXPECTED TO PASS: sanity check: call twice to the selector with the same arguments does not trigger a recomputation", () => {
  const selectVillainsByNameLike = makeSelectVillainsByNameLike();
  const found0 = selectVillainsByNameLike(mainState, { name: "Muttley" });
  const found1 = selectVillainsByNameLike(mainState, { name: "Muttley" });
  expect(found0).toBe(found1);
  expect(selectVillainsByNameLike.recomputations()).toBe(1);
});
