import { useMemo } from "react";
import { useSelector } from "react-redux";
import { makeSelectPowersByScheme } from "../store/assignments/selectors";

export function SchemePowers({ scheme }) {
  // const powers = [
  //   { name: "Laugh", level: 9 },
  //   { name: "Luck", level: -4 },
  // ];
  const selectPowersByScheme = useMemo(makeSelectPowersByScheme, []);
  const powers = useSelector((s) =>
    selectPowersByScheme(s, { scheme: scheme.name })
  );

  return (
    <div data-testid="scheme-powers">
      <h3>Scheme Powers</h3>
      <ul>
        {powers.map((power) => (
          <li key={power.name} data-testid="power">
            {power.name}, level {power.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
