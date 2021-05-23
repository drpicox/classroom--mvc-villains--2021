import { ViewHome } from "./ViewHome";
import { ViewVillains } from "./ViewVillains";
import { ViewSchemes } from "./ViewSchemes";
import { ViewScheme } from "./ViewScheme";

const views = {
  Home: ViewHome,
  Villains: ViewVillains,
  Schemes: ViewSchemes,
  Scheme: ViewScheme,
};

export function Main() {
  const topView = { name: "Home" };
  const TopView = views[topView.name];
  return (
    <main>
      <TopView view={topView} />
    </main>
  );
}
