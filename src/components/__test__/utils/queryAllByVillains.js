import { getAllByTestId } from "@testing-library/dom";

export function getAllByVillains(container) {
  return getAllByTestId(container, "villain");
}
