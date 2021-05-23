import { createSelector } from "reselect";

export function selectVillains(mainState) {
  return mainState.villains;
}

function selectOptionsName(mainState, { name }) {
  return name;
}

export function makeSelectVillainByName() {
  return createSelector(selectVillains, selectOptionsName, (villains, name) => {
    for (let i = 0; i < villains.length; i += 1) {
      const villain = villains[i];
      if (villain.name === name) return villain;
    }
    return null;
  });
}

export function makeSelectVillainsByNameLike() {
  return createSelector(selectVillains, selectOptionsName, (villains, name) => {
    if (name === "") return villains;

    const result = [];
    for (let i = 0; i < villains.length; i += 1) {
      const villain = villains[i];
      if (villain.name.includes(name)) result.push(villain);
    }
    return result;
  });
}
