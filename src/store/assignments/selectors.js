import { createSelector } from "reselect";
import { selectVillains } from "../villains/selectors";

export function selectAssignments(mainState) {
  return mainState.assignments;
}

function selectOptionsScheme(mainState, { scheme }) {
  return scheme;
}

export function makeSelectVillainsByAssignmentScheme() {
  return createSelector(
    selectAssignments,
    selectVillains,
    selectOptionsScheme,
    (assignments, villains, scheme) => {
      const result = [];
      for (let i = 0; i < assignments.length; i += 1) {
        const assignment = assignments[i];
        if (assignment.scheme === scheme)
          result.push(findVillain(villains, assignment.villain));
      }
      return result;
    }
  );
}

function findVillain(villains, name) {
  for (let i = 0; i < villains.length; i += 1) {
    const villain = villains[i];
    if (villain.name === name) return villain;
  }
}

export function makeSelectPowersByScheme() {
  const selectVillainsByAssignmentScheme =
    makeSelectVillainsByAssignmentScheme();
  return createSelector(
    selectVillainsByAssignmentScheme,
    (assignedVillains) => {
      const result = [];
      for (let i = 0; i < assignedVillains.length; i += 1) {
        const villain = assignedVillains[i];
        addPowersFromVillain(villain, result);
      }
      return result;
    }
  );
}

function addPowersFromVillain(villain, result) {
  let power = findPower(result, villain.power);
  if (!power) result.push({ name: villain.power, level: villain.level });
  else power.level += villain.level;
}

function findPower(powers, name) {
  for (let i = 0; i < powers.length; i += 1) {
    const power = powers[i];
    if (power.name === name) return power;
  }
  return null;
}
