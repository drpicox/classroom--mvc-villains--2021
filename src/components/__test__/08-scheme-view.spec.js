import { startApp } from "./utils/startApp";
import { goView } from "./utils/goView";
import { getByScheme } from "./utils/queryAllByScheme";
import { addScheme } from "./utils/addScheme";
import { captureCrichton, destroyScarrans } from "./utils/moreSchemes";
import { getByH1 } from "./utils/queryAllByH1";
import { goScheme } from "./utils/goScheme";

// Changes: src/components/ViewSchemes.js
// Changes: src/components/ViewScheme.js

beforeEach(() => {
  startApp();

  goView("Schemes");
  addScheme(document.body, captureCrichton);
  addScheme(document.body, destroyScarrans);
});

test("EXPECTED TO PASS: the list has the schemes", () => {
  const scheme1 = getByScheme(document.body, 1);
  const scheme2 = getByScheme(document.body, 2);

  expect(scheme1).toHaveTextContent(/Capture Crichton/);
  expect(scheme2).toHaveTextContent(/Destroy Scarrans/);
  expect(() => getByScheme(document.body, 3)).toThrow();
});

test.each`
  schemeNumber | content
  ${1}         | ${/Scheme: Capture Crichton/}
  ${2}         | ${/Scheme: Destroy Scarrans/}
`("View a Scheme ($schemeNumber})", ({ schemeNumber, content }) => {
  goScheme(document.body, schemeNumber);

  // hint: there are two steps
  // - first remove the alert error by the dispatch
  // - second use the react prop view.schema to select the schema by name
  //   (remember use useMemo(makeSelector, []) to create the selector)

  const title = getByH1(document.body);
  expect(title).toHaveTextContent(content);
});
