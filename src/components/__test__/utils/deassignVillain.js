import { getByAssignments } from "./queryAllByAssignments";
import { getByVillain } from "./queryAllByVillain";
import { getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function deassignVillain(content, number) {
  const assignList = getByAssignments(content);
  const villain = getByVillain(assignList, number);
  const deassign = getByRole(villain, "button", { name: "remove" });
  userEvent.click(deassign);
}
