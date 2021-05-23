import { useSelector } from "react-redux";
import { selectVillains } from "../store/villains/selectors";
import { FormAddVillain } from "./FormAddVillain";

export function ViewVillains() {
  // const villains = villainExamples;
  const villains = useSelector(selectVillains);

  return (
    <>
      <h1>Villains</h1>
      <ul>
        {villains.map((villain) => (
          <li key={villain.name}>
            <p data-testid="villain">
              <strong>{villain.name}</strong>
              <br />
              {villain.power}, level: {villain.level}.
            </p>
          </li>
        ))}
      </ul>
      <FormAddVillain />
    </>
  );
}
