import { startApp } from "./utils/startApp";
import { goView } from "./utils/goView";
import { getByVillain } from "./utils/queryAllByVillain";
import { addVillain } from "./utils/addVillain";
import { grayza, scorpius } from "./utils/moreVillains";

// Changes: src/components/FormAddVillain.js

beforeEach(() => {
  startApp();
  goView("Villains");
});

test("EXPECTED TO PASS: the list is empty in the beggining", () => {
  expect(() => getByVillain(document.body, 1)).toThrow();
});

test("Adds a new Villain", () => {
  goView("Villains");

  // hint: control click addVillain to see what it does
  addVillain(document.body, scorpius);

  // hint: dispatch villain added
  const villain = getByVillain(document.body, 1);
  expect(villain).toHaveTextContent(/Scorpius.*Perseverance.*10/);
});

test("EXPECTED TO PASS: add more than one villain", () => {
  goView("Villains");

  addVillain(document.body, scorpius);
  addVillain(document.body, grayza);

  const villain1 = getByVillain(document.body, 1);
  const villain2 = getByVillain(document.body, 2);

  expect(villain1).toHaveTextContent(/Scorpius.*Perseverance.*10/);
  expect(villain2).toHaveTextContent(/Grayza.*Interrogation.*4/);
});
