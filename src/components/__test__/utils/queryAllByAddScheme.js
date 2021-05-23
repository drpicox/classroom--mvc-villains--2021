import { getByTestId } from "@testing-library/dom";

export function getByAddScheme(container) {
  return getByTestId(container, "add-scheme");
}
