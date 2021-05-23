import { ASSIGNMENT_ADDED, assignmentAdded } from "../assignments/actions";
// Create the file, and changes to, src/store/assignments/actions.js
// hint: look to the test views-actions for more hints

test("ASSIGNMENT_ADDED is an action type", () => {
  expect(ASSIGNMENT_ADDED).toEqual("assignments/ASSIGNMENT_ADDED");
});

test("add the assignmentAdded action creator with one argument called assignment", () => {
  const assignment = { villain: "Muttley", scheme: "Flood the World" };
  const action = assignmentAdded(assignment);
  expect(action).toMatchObject({ type: ASSIGNMENT_ADDED, assignment });
});
