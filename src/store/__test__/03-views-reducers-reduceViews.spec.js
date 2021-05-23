import { NO_ACTION } from "./helpers/actions";
import { reduceViews } from "../views/reducers";
// Make all changes to src/store/views/reducers.js

test("add the reduceViews reducer function", () => {
  // add: export function reduceViews() {}
  expect(reduceViews).toEqual(expect.any(Function));
});

test.each`
  state
  ${42}
  ${"hello"}
  ${{ name: "world" }}
`(
  "make reduceViews return whatever it receives in the first argument ($state)",
  async ({ state }) => {
    // add argument: reduceViews(state) { return state; }
    const result = reduceViews(state, NO_ACTION);
    expect(result).toBe(state);
  }
);

test('make the initialState to be [{name:"Home"}]', () => {
  // add: const initialState = [{name:'Home'}];
  // add default: reduceViews(state = initialState)
  const result = reduceViews(undefined, NO_ACTION);
  expect(result).toEqual([{ name: "Home" }]);
});
