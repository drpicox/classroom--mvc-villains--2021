import { getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getByHeader } from "./queryAllByHeader";

export function goView(name) {
  const header = getByHeader(document.body);
  const button = getByRole(header, "button", { name });
  userEvent.click(button);
}
