import { getAllByTestId } from "@testing-library/dom";

export function getAllBySchemes(container) {
  return getAllByTestId(container, "scheme");
}
