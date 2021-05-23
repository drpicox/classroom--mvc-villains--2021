import { VIEW_POPPED, viewPopped } from "../views/actions";
// Make all changes to src/store/views/actions.js

test("add the VIEW_POPPED action type", () => {
  // add: export const VIEW_POPPED = 'views/VIEW_POPPED';
  expect(VIEW_POPPED).toEqual("views/VIEW_POPPED");
});

test("add the viewPopped action creator function", () => {
  // add: export function viewPopped() {}
  // to src/store/views/actions.js
  expect(viewPopped).toEqual(expect.any(Function));
});

test("viewPopped should return an object", () => {
  // add: return {}
  const action = viewPopped();
  expect(action).toMatchObject({});
});

test("viewPopped should return a new action of type VIEW_POPPED", () => {
  // replace: return { type: VIEW_POPPED }
  const action = viewPopped();
  expect(action).toMatchObject({ type: VIEW_POPPED });
});
