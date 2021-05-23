import { startApp } from "./utils/startApp";
import { addSchemes } from "./utils/addSchemes";
import { addVillains } from "./utils/addVillains";
import { captureCrichton } from "./utils/moreSchemes";
import { goScheme } from "./utils/goScheme";
import { braca, crais, grayza, harvey, scorpius } from "./utils/moreVillains";
import { assignVillains } from "./utils/assignVillains";
import { deassignVillains } from "./utils/deassignVillains";
import { getByPower } from "./utils/queryAllByPower";

// Changes: src/components/SchemePowers.js

beforeEach(() => {
  startApp();
});

test.each`
  assigns         | deassigns    | contents
  ${[1]}          | ${[]}        | ${[/Perseverance.*10/]}
  ${[1, 2]}       | ${[]}        | ${[/Perseverance.*10/, /Mind Games.*5/]}
  ${[1, 4, 5]}    | ${[]}        | ${[/Perseverance.*10/, /Pacekeeper.*13/]}
  ${[1, 4, 5]}    | ${[2]}       | ${[/Perseverance.*10/, /Pacekeeper.*10/]}
  ${[1, 4, 5, 4]} | ${[3]}       | ${[/Perseverance.*10/, /Pacekeeper.*3/]}
  ${[1, 4, 5]}    | ${[1, 1, 1]} | ${[]}
  ${[]}           | ${[]}        | ${[]}
`(
  "Shows the list of scheme powers ($assigns / $deassigns)",
  ({ assigns, deassigns, contents }) => {
    addVillains(scorpius, harvey, grayza, braca, crais);
    addSchemes(captureCrichton);
    goScheme(document.body, 1);

    assignVillains(...assigns);
    deassignVillains(...deassigns);

    contents.forEach((match, index) => {
      const villain = getByPower(document.body, index + 1);
      expect(villain).toHaveTextContent(match);
    });

    expect(() => getByPower(document.body, contents.length + 1)).toThrow();
  }
);
