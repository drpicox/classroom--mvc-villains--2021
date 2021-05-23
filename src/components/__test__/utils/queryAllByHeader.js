import { getByTestId } from "@testing-library/dom";

export function getByHeader(container) {
  return getByTestId(container, "header");
}
