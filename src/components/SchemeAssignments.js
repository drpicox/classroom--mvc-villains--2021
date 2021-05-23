import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignmentRemoved } from "../store/assignments/actions";
import { makeSelectVillainsByAssignmentScheme } from "../store/assignments/selectors";

export function SchemeAssignments({ scheme }) {
  // const assignments = [doctorEvil, darkHelmet];
  const selectVillainsByAssignmentScheme = useMemo(
    makeSelectVillainsByAssignmentScheme,
    []
  );
  const assignments = useSelector((s) =>
    selectVillainsByAssignmentScheme(s, { scheme: scheme.name })
  );

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
    // alert(JSON.stringify(assignment), dispatch);
    dispatch(assignmentRemoved(assignment));
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
