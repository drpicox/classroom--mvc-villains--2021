import { startApp } from "./utils/startApp";
import { getByAssignments } from "./utils/queryAllByAssignments";
import { getByVillain } from "./utils/queryAllByVillain";
import { addSchemes } from "./utils/addSchemes";
import { addVillains } from "./utils/addVillains";
import { captureCrichton } from "./utils/moreSchemes";
import { goScheme } from "./utils/goScheme";
import { grayza, harvey, scorpius } from "./utils/moreVillains";
import { assignVillains } from "./utils/assignVillains";
import { deassignVillains } from "./utils/deassignVillains";

// Changes: src/components/SchemeAssignments.js

beforeEach(() => {
  startApp();
});

test.each`
  assigns      | deassigns | contents
  ${[1, 2]}    | ${[2, 1]} | ${[]}
  ${[1, 2]}    | ${[1]}    | ${[/Harvey/]}
  ${[1, 2, 3]} | ${[1]}    | ${[/Harvey/, /Grayza/]}
  ${[1, 2, 3]} | ${[2]}    | ${[/Scorpius/, /Grayza/]}
  ${[1, 2, 3]} | ${[3]}    | ${[/Scorpius/, /Harvey/]}
  ${[1, 2, 3]} | ${[1, 1]} | ${[/Grayza/]}
`(
  "The list for adding assignments shows all villains ($assigns / $deassigns)",
  ({ assigns, deassigns, contents }) => {
    addVillains(scorpius, harvey, grayza);
    addSchemes(captureCrichton);
    goScheme(document.body, 1);

    assignVillains(...assigns);
    deassignVillains(...deassigns);

    const assignList = getByAssignments(document.body);

    contents.forEach((match, index) => {
      const villain = getByVillain(assignList, index + 1);
      expect(villain).toHaveTextContent(match);
    });

    expect(() => getByVillain(assignList, contents.length + 1)).toThrow();
  }
);
