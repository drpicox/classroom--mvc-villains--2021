import { addVillain } from "./addVillain";
import { goView } from "./goView";

export function addVillains(...villains) {
  goView("Villains");
  villains.forEach((v) => addVillain(document.body, v));
}
