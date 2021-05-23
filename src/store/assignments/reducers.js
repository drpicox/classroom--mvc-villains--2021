import { ASSIGNMENT_ADDED, ASSIGNMENT_REMOVED } from "./actions";

const initialState = [];

export function reduceAssignments(state = initialState, action) {
  switch (action.type) {
    case ASSIGNMENT_ADDED:
      return reduceAssignmentAdded(state, action);
    case ASSIGNMENT_REMOVED:
      return reduceAssignmentRemoved(state, action);
    default:
      return state;
  }
}

function reduceAssignmentAdded(state, action) {
  const index = findIndexOfAssignment(state, action.assignment);
  if (index >= 0) return state;

  const copy = [...state];
  copy.push(action.assignment);
  return copy;
}

function reduceAssignmentRemoved(state, action) {
  const index = findIndexOfAssignment(state, action.assignment);
  if (index < 0) return state;

  const copy = [...state];
  copy.splice(index, 1);
  return copy;
}

function findIndexOfAssignment(list, other) {
  for (let index = 0; index < list.length; index += 1) {
    const assignment = list[index];
    if (areAssignmentsEquals(assignment, other)) return index;
  }

  return -1;
}

function areAssignmentsEquals(assignment, other) {
  return (
    assignment.villain === other.villain && assignment.scheme === other.scheme
  );
}
