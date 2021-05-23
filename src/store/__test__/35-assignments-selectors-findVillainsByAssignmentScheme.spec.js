import { darkHelmet, muttley } from "../../data/villains";
import { villainAdded } from "../villains/actions";
import { createMainStore } from "../index";
import { makeSelectVillainsByAssignmentScheme } from "../assignments/selectors";
import { assignmentAdded } from "../assignments/actions";
// Create the file, and changes to, src/store/assignments/selectors.js
// hint: look to villains-selectors for more hints

const assignment1 = { villain: "Muttley", scheme: "Flood the World" };
const assignment2 = { villain: "Dark Helmet", scheme: "Flood the World" };
const assignment3 = { villain: "Muttley", scheme: "Unleash the Dragons" };

let mainState;
beforeEach(() => {
  const store = createMainStore();
  store.dispatch(villainAdded(muttley));
  store.dispatch(villainAdded(darkHelmet));
  store.dispatch(assignmentAdded(assignment1));
  store.dispatch(assignmentAdded(assignment2));
  store.dispatch(assignmentAdded(assignment3));
  mainState = store.getState();
});

test("returns an empty list if there is no villain assigned to the given scheme", () => {
  const selectVillainsByAssignmentScheme =
    makeSelectVillainsByAssignmentScheme();
  const found = selectVillainsByAssignmentScheme(mainState, {
    scheme: "Teleport the Bank",
  });

  expect(found).toEqual([]);
});

test.each`
  scheme                   | expected
  ${"Flood the World"}     | ${[muttley, darkHelmet]}
  ${"Unleash the Dragons"} | ${[muttley]}
`(
  "returns a list with the villain instances if the scheme has assignments ($scheme)",
  ({ scheme, expected }) => {
    // hint: import selectVillains from villains
    const selectVillainsByAssignmentScheme =
      makeSelectVillainsByAssignmentScheme();
    const found = selectVillainsByAssignmentScheme(mainState, { scheme });

    expect(found).toEqual(expected);
    // note: do not take into account possible missmatch between assignment villain name and actual villain names
  }
);

test("MAY ALREADY PASS: the selector has memoization", () => {
  const scheme = "Flood the World";
  const selectVillainsByAssignmentScheme =
    makeSelectVillainsByAssignmentScheme();
  const found0 = selectVillainsByAssignmentScheme(mainState, { scheme });
  const found1 = selectVillainsByAssignmentScheme(mainState, { scheme });

  // hint: use createSelector
  expect(found0).toBe(found1);
});
