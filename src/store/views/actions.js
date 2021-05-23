export const VIEW_PUSHED = "views/VIEW_PUSHED";

export function viewPushed(newView) {
  return { type: VIEW_PUSHED, newView };
}

export const VIEW_POPPED = "views/VIEW_POPPED";

export function viewPopped(newView) {
  return { type: VIEW_POPPED, newView };
}
