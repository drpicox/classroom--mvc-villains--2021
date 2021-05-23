import { deassignVillain } from "./deassignVillain";

export function deassignVillains(...numbers) {
  numbers.forEach((n) => deassignVillain(document.body, n));
}
