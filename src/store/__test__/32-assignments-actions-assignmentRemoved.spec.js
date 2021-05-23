import { ASSIGNMENT_REMOVED, assignmentRemoved } from "../assignments/actions";
// Create the file, and changes to, src/store/assignments/actions.js
// hint: look to the test views-actions for more hints

test("ASSIGNMENT_REMOVED is an action type", () => {
  expect(ASSIGNMENT_REMOVED).toEqual("assignments/ASSIGNMENT_REMOVED");
});

test("add the assignmentRemoved action creator with one argument called assignment", () => {
  const assignment = { villain: "Muttley", scheme: "Flood the World" };
  const action = assignmentRemoved(assignment);
  expect(action).toMatchObject({ type: ASSIGNMENT_REMOVED, assignment });
});
