import { SCHEME_ADDED } from "./actions";

export function reduceSchemes(state = [], action) {
  switch (action.type) {
    case SCHEME_ADDED:
      return reduceSchemeAdded(state, action);
    default:
      return state;
  }
}

export function reduceSchemeAdded(state, action) {
  const copy = [...state];
  copy.push(action.scheme);
  return copy;
}
