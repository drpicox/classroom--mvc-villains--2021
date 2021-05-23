import { getByAddAssignments } from "./queryAllByAddAssignments";
import { getByVillain } from "./queryAllByVillain";
import { getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function assignVillain(content, number) {
  const addList = getByAddAssignments(content);
  const villain = getByVillain(addList, number);
  const assign = getByRole(villain, "button", { name: "assign" });
  userEvent.click(assign);
}
