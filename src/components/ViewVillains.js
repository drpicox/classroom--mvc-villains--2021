import { villainExamples } from "../data/villains";
import { FormAddVillain } from "./FormAddVillain";

export function ViewVillains() {
  const villains = villainExamples;

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
