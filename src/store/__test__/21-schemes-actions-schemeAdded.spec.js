import { SCHEME_ADDED, schemeAdded } from "../schemes/actions";
// Create the file, and changes to, src/store/schemes/actions.js

test("SCHEME_ADDED is an action type", () => {
  expect(SCHEME_ADDED).toEqual("schemes/SCHEME_ADDED");
});

test("add the schemeAdded action creator with one argument called scheme", () => {
  const scheme = { name: "Flood the World" };
  const action = schemeAdded(scheme);
  expect(action).toMatchObject({ type: SCHEME_ADDED, scheme });
});
