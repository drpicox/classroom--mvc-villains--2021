import { createMainStore } from "../index";
import { selectSchemes } from "../schemes/selectors";
// Create the file, and changes to, src/store/schemes/selectors.js
// hint: look to villains-selectors for more hints

let store;
beforeEach(() => {
  store = createMainStore();
});

test("the selectSchemes selector function returns the content of schemes", () => {
  const mainState = store.getState();
  const schemes = selectSchemes(mainState);
  expect(schemes).toBe(mainState.schemes);
});
