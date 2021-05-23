import { startApp } from "./utils/startApp";
import { getByH1 } from "./utils/queryAllByH1";
// Changes: src/components/Main.js

beforeEach(() => startApp());

test("EXPECTED TO PASS: the initial screen is the home", () => {
  const title = getByH1(document.body);
  expect(title).toHaveTextContent("Home");
});
