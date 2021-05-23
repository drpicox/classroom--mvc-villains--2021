import { createMainStore } from "../index";
import { selectAssignments } from "../assignments/selectors";
// Create the file, and changes to, src/store/assignments/selectors.js
// hint: look to villains-selectors for more hints

let store;
beforeEach(() => {
  store = createMainStore();
});

test("the selectAssignments selector function returns the content of assignments", () => {
  const mainState = store.getState();
  const assignments = selectAssignments(mainState);
  expect(assignments).toBe(mainState.assignments);
});
