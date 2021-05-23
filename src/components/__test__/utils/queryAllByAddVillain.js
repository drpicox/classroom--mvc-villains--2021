import { getByTestId } from "@testing-library/dom";

export function getByAddVillain(container) {
  return getByTestId(container, "add-villain");
}
