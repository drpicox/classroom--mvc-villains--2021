import { getState, startApp } from "./utils/startApp";
import { getByH1 } from "./utils/queryAllByH1";
import { selectTopView } from "../../store/views/selectors";
import { goView } from "./utils/goView";
// Changes: src/components/Header.js
// Changes: src/components/Main.js

beforeEach(() => startApp());

test("Click on header Villains dispatches an viewPushed action", () => {
  // hint: control click goView to see what is doing under the hood
  goView("Villains");

  // hint: dispatch viewPushed on the corresponding header callback
  const topView = selectTopView(getState());
  expect(topView).toEqual({ name: "Villains" });
});

test("Click on header Villains shows the Villains view", () => {
  goView("Villains");

  // hint: select the top view on the main component
  const title = getByH1(document.body);
  expect(title).toHaveTextContent("Villains");
});
