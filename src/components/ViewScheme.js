import { SchemeAssignments } from "./SchemeAssignments";
import { SchemeAddAssignments } from "./SchemeAddAssignments";
import { SchemePowers } from "./SchemePowers";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { makeSelectSchemeByName } from "../store/schemes/selectors";

export function ViewScheme({ view }) {
  // const scheme = { name: "Flood the World" };
  const selectSchemeByName = useMemo(makeSelectSchemeByName, []);
  const scheme = useSelector((s) =>
    selectSchemeByName(s, { name: view.scheme })
  );

  return (
    <>
      <h1>Scheme: {scheme.name}</h1>
      <SchemePowers scheme={scheme} />
      <SchemeAssignments scheme={scheme} />
      <SchemeAddAssignments scheme={scheme} />
    </>
  );
}
