import { getByTestId } from "@testing-library/dom";

export function getByAddAssignments(container) {
  return getByTestId(container, "add-assignments");
}
