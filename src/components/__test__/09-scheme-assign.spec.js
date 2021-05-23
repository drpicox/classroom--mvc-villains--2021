import { startApp } from "./utils/startApp";
import { getByAddAssignments } from "./utils/queryAllByAddAssignments";
import { getByAssignments } from "./utils/queryAllByAssignments";
import { getByVillain } from "./utils/queryAllByVillain";
import { addSchemes } from "./utils/addSchemes";
import { addVillains } from "./utils/addVillains";
import { captureCrichton } from "./utils/moreSchemes";
import { goScheme } from "./utils/goScheme";
import { grayza, harvey, scorpius } from "./utils/moreVillains";
import { assignVillains } from "./utils/assignVillains";

// Changes: src/components/SchemeAddAssignments.js
// Changes: src/components/SchemeAssignments.js

beforeEach(() => {
  startApp();
});

test.each`
  villains                      | contents
  ${[scorpius, harvey, grayza]} | ${[/Scorpius/, /Harvey/, /Grayza/]}
  ${[]}                         | ${[]}
  ${[scorpius]}                 | ${[/Scorpius/]}
`(
  "The list for adding assignments shows all villains ($villains)",
  ({ villains, contents }) => {
    addVillains(...villains);
    addSchemes(captureCrichton);
    goScheme(document.body, 1);

    const addList = getByAddAssignments(document.body);

    contents.forEach((match, index) => {
      const villain = getByVillain(addList, index + 1);
      expect(villain).toHaveTextContent(match);
    });

    expect(() => getByVillain(addList, contents.length + 1)).toThrow();
  }
);

test.each`
  assignNumbers | contents
  ${[1]}        | ${[/Scorpius/]}
  ${[]}         | ${[]}
  ${[1, 3]}     | ${[/Scorpius/, /Grayza/]}
  ${[3, 1]}     | ${[/Grayza/, /Scorpius/]}
`(
  "Add assignment adds the assignment to the list of assigned villains ($assignNumbers)",
  ({ assignNumbers, contents }) => {
    addVillains(scorpius, harvey, grayza);
    addSchemes(captureCrichton);
    goScheme(document.body, 1);

    // hint: there are two steps
    // - first replace the alert by the dispatch
    // - second use the react prop schema to select the villains assigned to that schema
    //   (remember use useMemo(makeSelector, []) to create the selector)

    assignVillains(...assignNumbers);

    const assignList = getByAssignments(document.body);

    contents.forEach((match, index) => {
      const villain = getByVillain(assignList, index + 1);
      expect(villain).toHaveTextContent(match);
    });

    expect(() => getByVillain(assignList, contents.length + 1)).toThrow();
  }
);
