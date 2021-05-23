import { getAllByTestId } from "@testing-library/dom";

export function getAllByPowers(container) {
  return getAllByTestId(container, "power");
}
