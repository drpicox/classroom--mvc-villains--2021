import { dispatch, startApp } from "./utils/startApp";
import { goView } from "./utils/goView";
import { schemeAdded } from "../../store/schemes/actions";
import { getByScheme } from "./utils/queryAllByScheme";
import { getByH1 } from "./utils/queryAllByH1";
import { captureCrichton, destroyScarrans } from "./utils/moreSchemes";
// Changes: src/components/Header.js
// Changes: src/components/ViewSchemes.js

beforeEach(() => startApp());

test("Click on header Schemes goes to Schemes", () => {
  goView("Schemes");

  // hint: see view-villains
  const title = getByH1(document.body);
  expect(title).toHaveTextContent("Schemes");
});

test("Schemes shows a list with the schemes", () => {
  dispatch(schemeAdded(captureCrichton));
  dispatch(schemeAdded(destroyScarrans));
  goView("Schemes");

  const scheme1 = getByScheme(document.body, 1);
  const scheme2 = getByScheme(document.body, 2);

  // hint: select schemes
  expect(scheme1).toHaveTextContent(/Capture Crichton/);
  expect(scheme2).toHaveTextContent(/Destroy Scarrans/);
});

test("EXPECTED TO PASS: There are no schemmes in the begginning", () => {
  goView("Schemes");

  expect(() => getByScheme(document.body, 1)).toThrow();
});

test("EXPECTED TO PASS: Schemes shows no more elements than necessary", () => {
  dispatch(schemeAdded(captureCrichton));
  dispatch(schemeAdded(destroyScarrans));
  goView("Schemes");

  expect(() => getByScheme(document.body, 3)).toThrow();
});
