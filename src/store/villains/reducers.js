import { VILLAIN_ADDED } from "./actions";

const initialState = [];

export function reduceVillains(state = initialState, action) {
  switch (action.type) {
    case VILLAIN_ADDED:
      return reduceVillainAdded(state, action);
    default:
      return state;
  }
}

function reduceVillainAdded(state, action) {
  const copy = [...state];
  copy.push(action.villain);
  return copy;
}
