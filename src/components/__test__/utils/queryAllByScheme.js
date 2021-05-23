import { prettyDOM } from "@testing-library/dom";
import { getAllBySchemes } from "./queryAllBySchemes";

export function getByScheme(container, number) {
  const schemes = getAllBySchemes(container);
  if (schemes.length < number)
    throw new Error(
      `Looking for the scheme number ${number} but only found ${schemes.length} schemes:` +
        "\n\n" +
        schemes.map((v) => prettyDOM(v)).join("\n\n")
    );
  return schemes[number - 1];
}
