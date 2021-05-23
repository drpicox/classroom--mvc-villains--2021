import {
  darkHelmet,
  dastardly,
  doctorEvil,
  hankScorpio,
  muttley,
} from "../../data/villains";
import { villainAdded } from "../villains/actions";
import { createMainStore } from "../index";
import { makeSelectPowersByScheme } from "../assignments/selectors";
import { assignmentAdded } from "../assignments/actions";
// Create the file, and changes to, src/store/assignments/selectors.js
// hint: look to villains-selectors for more hints

const assignment1 = { villain: "Muttley", scheme: "Flood the World" };
const assignment2 = { villain: "Dark Helmet", scheme: "Flood the World" };
const assignment3 = { villain: "Muttley", scheme: "Unleash the Dragons" };
const assignment4 = { villain: "Doctor Evil", scheme: "Teleport the Bank" };
const assignment5 = { villain: "Dark Helmet", scheme: "Teleport the Bank" };
const assignment6 = { villain: "Dastardly", scheme: "Teleport the Bank" };
const assignment7 = { villain: "Hank Scorpio", scheme: "Teleport the Bank" };

let mainState;
beforeEach(() => {
  const store = createMainStore();
  store.dispatch(villainAdded(muttley));
  store.dispatch(villainAdded(dastardly));
  store.dispatch(villainAdded(darkHelmet));
  store.dispatch(villainAdded(doctorEvil));
  store.dispatch(villainAdded(hankScorpio));
  store.dispatch(assignmentAdded(assignment1));
  store.dispatch(assignmentAdded(assignment2));
  store.dispatch(assignmentAdded(assignment3));
  store.dispatch(assignmentAdded(assignment4));
  store.dispatch(assignmentAdded(assignment5));
  store.dispatch(assignmentAdded(assignment6));
  store.dispatch(assignmentAdded(assignment7));
  mainState = store.getState();
});

test("returns an empty list if there is no villain assigned to the given scheme", () => {
  const selectPowersByScheme = makeSelectPowersByScheme();
  const found = selectPowersByScheme(mainState, {
    scheme: "Steal the Moon",
  });

  expect(found).toEqual([]);
});

test.each`
  scheme                   | expected
  ${"Flood the World"}     | ${[{ name: "Laugh", level: 10 }, { name: "Luck", level: -4 }]}
  ${"Unleash the Dragons"} | ${[{ name: "Laugh", level: 10 }]}
  ${"Teleport the Bank"}   | ${[{ name: "Laugh", level: 9 }, { name: "Luck", level: -4 }, { name: "Technical", level: 8 }]}
`(
  "returns a list with the villain instances if the scheme has assignments ($scheme)",
  ({ scheme, expected }) => {
    // hint: use selectVillainsByAssignmentScheme
    const selectPowersByScheme = makeSelectPowersByScheme();
    const found = selectPowersByScheme(mainState, { scheme });

    expect(found).toEqual(expected);
  }
);

test("MAY ALREADY PASS: the selector has memoization", () => {
  const scheme = "Flood the World";
  const selectPowersByScheme = makeSelectPowersByScheme();
  const found0 = selectPowersByScheme(mainState, { scheme });
  const found1 = selectPowersByScheme(mainState, { scheme });

  // hint: use createSelector
  expect(found0).toBe(found1);
});
