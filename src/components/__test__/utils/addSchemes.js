import { addScheme } from "./addScheme";
import { goView } from "./goView";

export function addSchemes(...schemes) {
  goView("Schemes");
  schemes.forEach((s) => addScheme(document.body, s));
}
