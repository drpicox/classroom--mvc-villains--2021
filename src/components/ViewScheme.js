import { SchemeAssignments } from "./SchemeAssignments";
import { SchemeAddAssignments } from "./SchemeAddAssignments";
import { SchemePowers } from "./SchemePowers";

export function ViewScheme({ view }) {
  const scheme = { name: "Flood the World" };
  // const selectSchemeByName = useMemo(makeSelectSchemeByName, []);

  return (
    <>
      <h1>Scheme: {scheme.name}</h1>
      <SchemePowers scheme={scheme} />
      <SchemeAssignments scheme={scheme} />
      <SchemeAddAssignments scheme={scheme} />
    </>
  );
}
