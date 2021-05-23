import { getByLabelText, getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getByAddScheme } from "./queryAllByAddScheme";

export function addScheme(container, scheme) {
  const addSchemesContainer = getByAddScheme(container);

  const name = getByLabelText(addSchemesContainer, /Name/);
  userEvent.type(name, scheme.name);

  const add = getByRole(addSchemesContainer, "button", { name: "Add" });
  userEvent.click(add);
}
