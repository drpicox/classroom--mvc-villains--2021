export const ASSIGNMENT_ADDED = "assignments/ASSIGNMENT_ADDED";

export function assignmentAdded(assignment) {
  return {
    type: ASSIGNMENT_ADDED,
    assignment,
  };
}

export const ASSIGNMENT_REMOVED = "assignments/ASSIGNMENT_REMOVED";

export function assignmentRemoved(assignment) {
  return {
    type: ASSIGNMENT_REMOVED,
    assignment,
  };
}
