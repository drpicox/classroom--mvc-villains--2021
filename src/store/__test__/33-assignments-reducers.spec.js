import { assignmentAdded, assignmentRemoved } from "../assignments/actions";
import { createMainStore } from "../index";
// Create the file, and changes to, src/store/assignments/reducers.js
// Also changes to, src/store/index.js
// hint: look to the test villains-reducers for more hints

const assignment1 = { villain: "Muttley", scheme: "Flood the World" };
const assignment2 = { villain: "Dark Helmet", scheme: "Flood the World" };
const assignment3 = { villain: "Muttley", scheme: "Unleash the Dragons" };

let store;
beforeEach(() => {
  store = createMainStore();
});

test("there are no assignments in the beggining (empty list)", () => {
  // hint: create the reducer with initial state, export, and import into combineReducers
  const mainState = store.getState();
  expect(mainState).toMatchObject({ assignments: [] });
});

test("the action assignmentAdded makes the reducer appends one assignment to the list", () => {
  // hint: add the switch, the case for assignmentAdded, and its reduceSchemeAdded
  store.dispatch(assignmentAdded(assignment1));

  const mainState = store.getState();
  expect(mainState).toMatchObject({ assignments: [assignment1] });
});

test("EXPECTED TO PASS: push multiple assignments", () => {
  store.dispatch(assignmentAdded(assignment1));
  store.dispatch(assignmentAdded(assignment2));
  store.dispatch(assignmentAdded(assignment3));

  const mainState = store.getState();
  expect(mainState).toMatchObject({
    assignments: [assignment1, assignment2, assignment3],
  });
});

test("EXPECTED TO PASS: sanity check: the action creates a new copy of the state, and the old does not changes", () => {
  const mainState0 = store.getState();
  const assignmentsState0Copy = [...mainState0.assignments];
  store.dispatch(assignmentAdded(assignment1));

  // hint: verify that you copy the state
  expect(mainState0.assignments).toEqual(assignmentsState0Copy);
});

test("cannot add twice the same assignment", () => {
  store.dispatch(assignmentAdded(assignment1));
  store.dispatch(assignmentAdded({ ...assignment1 }));

  const mainState = store.getState();
  expect(mainState).toMatchObject({
    assignments: [assignment1],
  });
});

test("MAY ALREADY PASS: does not modify the state the second time that and assignment is added", () => {
  store.dispatch(assignmentAdded(assignment1));
  const mainState0 = store.getState();
  store.dispatch(assignmentAdded({ ...assignment1 }));
  const mainState1 = store.getState();

  expect(mainState1).toBe(mainState0);
});

test("the action assignmentRemoved makes the reducer remove one assignment to the list", () => {
  store.dispatch(assignmentAdded(assignment2));
  store.dispatch(assignmentAdded(assignment1));
  store.dispatch(assignmentAdded(assignment3));

  store.dispatch(assignmentRemoved(assignment1));

  const mainState = store.getState();
  expect(mainState).toMatchObject({ assignments: [assignment2, assignment3] });
});

test("the action assignmentRemoved does nothing if the assignment does not exists", () => {
  store.dispatch(assignmentAdded(assignment2));
  store.dispatch(assignmentAdded(assignment3));

  store.dispatch(assignmentRemoved(assignment1));

  const mainState = store.getState();
  expect(mainState).toMatchObject({ assignments: [assignment2, assignment3] });
});

test("MAY ALREADY PASS: does not modify the state removing a non existing assignment", () => {
  const mainState0 = store.getState();
  store.dispatch(assignmentRemoved(assignment1));
  const mainState1 = store.getState();

  expect(mainState1).toBe(mainState0);
});
