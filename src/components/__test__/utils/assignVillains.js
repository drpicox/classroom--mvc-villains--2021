import { assignVillain } from "./assignVillain";

export function assignVillains(...numbers) {
  numbers.forEach((n) => assignVillain(document.body, n));
}
