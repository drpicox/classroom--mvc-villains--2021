export const VILLAIN_ADDED = "villains/VILLAIN_ADDED";

export function villainAdded(villain) {
  return {
    type: VILLAIN_ADDED,
    villain,
  };
}
