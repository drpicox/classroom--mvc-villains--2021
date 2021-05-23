import { useSelector } from "react-redux";
import { ViewHome } from "./ViewHome";
import { ViewVillains } from "./ViewVillains";
import { ViewSchemes } from "./ViewSchemes";
import { ViewScheme } from "./ViewScheme";
import { selectTopView } from "../store/views/selectors";

const views = {
  Home: ViewHome,
  Villains: ViewVillains,
  Schemes: ViewSchemes,
  Scheme: ViewScheme,
};

export function Main() {
  // const topView = { name: "Home" };
  const topView = useSelector(selectTopView);
  const TopView = views[topView.name];
  return (
    <main>
      <TopView view={topView} />
    </main>
  );
}
