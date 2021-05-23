import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { darkHelmet, doctorEvil } from "../data/villains";

export function SchemeAssignments({ scheme }) {
  const assignments = [doctorEvil, darkHelmet];

  return (
    <div data-testid="assignments">
      <h3>Scheme Assignments</h3>
      <ul>
        {assignments.map((villain) => (
          <LiRemoveVillain
            key={villain.name}
            scheme={scheme}
            villain={villain}
          />
        ))}
      </ul>
    </div>
  );
}

function LiRemoveVillain({ scheme, villain }) {
  const dispatch = useDispatch();
  const remove = useCallback(() => {
    const assignment = { scheme: scheme.name, villain: villain.name };
    alert(JSON.stringify(assignment), dispatch);
  }, [dispatch, villain, scheme]);

  return (
    <li>
      <p data-testid="villain">
        {villain.name}
        <br />
        <button onClick={remove}>remove</button>
      </p>
    </li>
  );
}
