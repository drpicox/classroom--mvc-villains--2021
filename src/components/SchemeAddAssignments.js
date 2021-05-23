import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignmentAdded } from "../store/assignments/actions";
import { selectVillains } from "../store/villains/selectors";

export function SchemeAddAssignments({ scheme }) {
  // const villains = villainExamples;
  const villains = useSelector(selectVillains);

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
    // alert(JSON.stringify(assignment), dispatch);
    dispatch(assignmentAdded(assignment));
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
