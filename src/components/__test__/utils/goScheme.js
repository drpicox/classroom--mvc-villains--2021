import { getByScheme } from "./queryAllByScheme";
import { getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function goScheme(content, number) {
  const scheme = getByScheme(content, number);
  const view = getByRole(scheme, "button", { name: "view" });
  userEvent.click(view);
}
