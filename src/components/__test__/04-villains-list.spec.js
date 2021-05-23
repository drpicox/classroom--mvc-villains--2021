import { villainAdded } from "../../store/villains/actions";
import { dispatch, startApp } from "./utils/startApp";
import { goView } from "./utils/goView";
import { getByVillain } from "./utils/queryAllByVillain";
import { grayza, harvey, scorpius } from "./utils/moreVillains";
// Changes: src/components/ViewVillains.js

beforeEach(() => {
  startApp();
  goView("Villains");
  dispatch(villainAdded(scorpius));
  dispatch(villainAdded(harvey));
  dispatch(villainAdded(grayza));
});

test("Villains shows a list with the villains", () => {
  goView("Villains");

  const villain1 = getByVillain(document.body, 1);
  const villain2 = getByVillain(document.body, 2);
  const villain3 = getByVillain(document.body, 3);

  // hint: select villains
  expect(villain1).toHaveTextContent(/Scorpius.*Perseverance.*10/);
  expect(villain2).toHaveTextContent(/Harvey.*Mind Games.*5/);
  expect(villain3).toHaveTextContent(/Grayza.*Interrogation.*4/);
});

test("EXPECTED TO PASS: Villains shows no more elements than necessary", () => {
  goView("Villains");

  expect(() => getByVillain(document.body, 4)).toThrow();
});
