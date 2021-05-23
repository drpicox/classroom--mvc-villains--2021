export const SCHEME_ADDED = "schemes/SCHEME_ADDED";

export function schemeAdded(scheme) {
  return {
    type: SCHEME_ADDED,
    scheme,
  };
}
