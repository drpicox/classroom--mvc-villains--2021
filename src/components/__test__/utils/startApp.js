import { render } from "@testing-library/react";
import { App } from "../../../App";
import { createMainStore } from "../../../store";

let store;
export function startApp() {
  store = createMainStore();
  render(<App store={store} />);
}

export function getState() {
  return store.getState();
}

export function dispatch(action) {
  store.dispatch(action);
}
