import { prettyDOM } from "@testing-library/dom";
import { getAllByVillains } from "./queryAllByVillains";

export function getByVillain(container, number) {
  const villains = getAllByVillains(container);
  if (villains.length < number)
    throw new Error(
      `Looking for the villain number ${number} but only found ${villains.length} villains:` +
        "\n\n" +
        villains.map((v) => prettyDOM(v)).join("\n\n")
    );
  return villains[number - 1];
}
