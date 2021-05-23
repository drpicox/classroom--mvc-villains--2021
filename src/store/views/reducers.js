import { VIEW_PUSHED, VIEW_POPPED } from "./actions";

const initialState = [{ name: "Home" }];

export function reduceViews(state = initialState, action) {
  switch (action.type) {
    case VIEW_PUSHED:
      return reduceViewPushed(state, action);
    case VIEW_POPPED:
      return reduceViewPopped(state);
    default:
      return state;
  }
}

function reduceViewPushed(state, action) {
  const copy = [...state];
  copy.push(action.newView);
  return copy;
}

function reduceViewPopped(state) {
  if (state.length === 1) return state;
  const copy = [...state];
  copy.pop();
  return copy;
}
