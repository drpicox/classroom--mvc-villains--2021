import { createMainStore } from "../index";
import { selectVillains } from "../villains/selectors";
// Create the file, and changes to, src/store/villains/selectors.js

let store;
beforeEach(() => {
  store = createMainStore();
});

test("the selectVillains selector function returns the content of villains", () => {
  // hint: create function selectVillains() {} in the selectors.js
  // hint: make it return the field villains from the state
  const mainState = store.getState();
  const villains = selectVillains(mainState);
  expect(villains).toBe(mainState.villains);
});
