import { getByTestId } from "@testing-library/dom";

export function getBySchemePowers(container) {
  return getByTestId(container, "scheme-powers");
}
