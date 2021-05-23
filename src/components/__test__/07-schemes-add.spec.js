import { startApp } from "./utils/startApp";
import { goView } from "./utils/goView";
import { getByScheme } from "./utils/queryAllByScheme";
import { addScheme } from "./utils/addScheme";

// Changes: src/components/FormAddScheme.js

const captureCrichton = { name: "Capture Crichton" };
const destroyScarrans = { name: "Destroy Scarrans" };

beforeEach(() => {
  startApp();
  goView("Schemes");
});

test("EXPECTED TO PASS: the list is empty in the beggining", () => {
  expect(() => getByScheme(document.body, 1)).toThrow();
});

test("Adds a new Scheme", () => {
  goView("Schemes");

  // hint: control click addScheme to see what it does
  addScheme(document.body, captureCrichton);

  // hint: dispatch scheme added
  const scheme = getByScheme(document.body, 1);
  expect(scheme).toHaveTextContent(/Capture Crichton/);
});

test("EXPECTED TO PASS: add more than one scheme", () => {
  goView("Schemes");

  addScheme(document.body, captureCrichton);
  addScheme(document.body, destroyScarrans);

  const scheme1 = getByScheme(document.body, 1);
  const scheme2 = getByScheme(document.body, 2);

  expect(scheme1).toHaveTextContent(/Capture Crichton/);
  expect(scheme2).toHaveTextContent(/Destroy Scarrans/);
});
