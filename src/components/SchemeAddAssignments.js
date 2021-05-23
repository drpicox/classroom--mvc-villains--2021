import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { villainExamples } from "../data/villains";

export function SchemeAddAssignments({ scheme }) {
  const villains = villainExamples;

  return (
    <div data-testid="add-assignments">
      <h3>Add Villains</h3>
      <ul>
        {villains.map((villain) => (
          <LiAddVillain key={villain.name} scheme={scheme} villain={villain} />
        ))}
      </ul>
    </div>
  );
}

function LiAddVillain({ scheme, villain }) {
  const dispatch = useDispatch();
  const assign = useCallback(() => {
    const assignment = { scheme: scheme.name, villain: villain.name };
    alert(JSON.stringify(assignment), dispatch);
  }, [dispatch, villain, scheme]);

  return (
    <li>
      <p data-testid="villain">
        {villain.name}
        <br />
        <button onClick={assign}>assign</button>
      </p>
    </li>
  );
}
