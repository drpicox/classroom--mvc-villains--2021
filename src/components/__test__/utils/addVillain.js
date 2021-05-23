import { getByLabelText, getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getByAddVillain } from "./queryAllByAddVillain";

export function addVillain(container, villain) {
  const addVillainsContainer = getByAddVillain(container);

  const name = getByLabelText(addVillainsContainer, /Name/);
  userEvent.type(name, villain.name);
  const power = getByLabelText(addVillainsContainer, /Power/);
  userEvent.type(power, villain.power);
  const level = getByLabelText(addVillainsContainer, /Level/);
  userEvent.type(level, `${villain.level}`);

  const add = getByRole(addVillainsContainer, "button", { name: "Add" });
  userEvent.click(add);
}
