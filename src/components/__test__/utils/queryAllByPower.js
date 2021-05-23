import { prettyDOM } from "@testing-library/dom";
import { getAllByPowers } from "./queryAllByPowers";

export function getByPower(container, number) {
  const powers = getAllByPowers(container);
  if (powers.length < number)
    throw new Error(
      `Looking for the power number ${number} but only found ${powers.length} powers:` +
        "\n\n" +
        powers.map((v) => prettyDOM(v)).join("\n\n")
    );
  return powers[number - 1];
}
