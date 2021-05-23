import { startApp } from "./utils/startApp";
import { getByH1 } from "./utils/queryAllByH1";
import { goView } from "./utils/goView";
import { goBack } from "./utils/goBack";
// Changes: src/components/Header.js

beforeEach(() => startApp());

test("Click on header Home goes to Home", () => {
  goView("Villains");

  goView("Home");

  // hint: dispatch viewPushed on the corresponding header callback
  const title = getByH1(document.body);
  expect(title).toHaveTextContent("Home");
});

test.each`
  history                 | expected
  ${["Villains"]}         | ${"Home"}
  ${["Villains", "Home"]} | ${"Villains"}
`(
  "Click on header Back goes back to the previous View ($history)",
  ({ history, expected }) => {
    history.forEach(goView);

    // hint: control click goView to see what is doing under the hood
    goBack();

    // hint: dispatch viewPushed on the corresponding header callback
    const title = getByH1(document.body);
    expect(title).toHaveTextContent(expected);
  }
);
