import { getByTestId } from "@testing-library/dom";

export function getByAssignments(container) {
  return getByTestId(container, "assignments");
}
