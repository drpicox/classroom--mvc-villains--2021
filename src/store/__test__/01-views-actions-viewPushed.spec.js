import { VIEW_PUSHED, viewPushed } from "../views/actions";
// Make all changes to src/store/views/actions.js

test("add the VIEW_PUSHED action type", () => {
  // add: export const VIEW_PUSHED = 'views/VIEW_PUSHED';
  expect(VIEW_PUSHED).toEqual("views/VIEW_PUSHED");
});

test("add the viewPushed action creator function", () => {
  // add: export function viewPushed() {}
  // to src/store/views/actions.js
  expect(viewPushed).toEqual(expect.any(Function));
});

test("viewPushed should return an object", () => {
  // add: return {}
  const action = viewPushed();
  expect(action).toMatchObject({});
});

test("viewPushed should return a new action of type VIEW_PUSHED", () => {
  // replace: return { type: VIEW_PUSHED }
  const action = viewPushed();
  expect(action).toMatchObject({ type: VIEW_PUSHED });
});

test.each`
  newView
  ${42}
  ${"hello"}
  ${{ name: "Hello" }}
`(
  "viewPushed argument newView is returned inside the action object ($newView)",
  ({ newView }) => {
    // add argument: export function viewPushed(newView) {
    // replace: return { type: VIEW_PUSHED, newView }
    const action = viewPushed(newView);
    expect(action).toMatchObject({ newView });
  }
);
