import { createSelector } from "reselect";

export function selectSchemes(mainState) {
  return mainState.schemes;
}

function selectOptionsName(mainState, { name }) {
  return name;
}

export function makeSelectSchemeByName() {
  return createSelector(selectSchemes, selectOptionsName, (schemes, name) => {
    for (let i = 0; i < schemes.length; i += 1) {
      const scheme = schemes[i];
      if (scheme.name === name) return scheme;
    }
    return null;
  });
}
