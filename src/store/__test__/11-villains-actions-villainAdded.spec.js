import { VILLAIN_ADDED, villainAdded } from "../villains/actions";
// Create the file, and changes to, src/store/villains/actions.js

test("VILLAIN_ADDED is an action type", () => {
  expect(VILLAIN_ADDED).toEqual("villains/VILLAIN_ADDED");
});

test("add the villainAdded action creator with one argument called villain", () => {
  const villain = { name: "Muttley", power: "Laught", level: 10 };
  const action = villainAdded(villain);
  expect(action).toMatchObject({ type: VILLAIN_ADDED, villain });
});
