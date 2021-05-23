import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { schemeExamples } from "../data/schemes";
import { FormAddScheme } from "./FormAddScheme";

export function ViewSchemes() {
  const schemes = schemeExamples;

  return (
    <>
      <h1>Schemes</h1>
      <ul>
        {schemes.map((scheme) => (
          <LiScheme key={scheme.name} scheme={scheme} />
        ))}
      </ul>
      <FormAddScheme />
    </>
  );
}

function LiScheme({ scheme }) {
  const dispatch = useDispatch();
  const goScheme = useCallback(() => {
    const view = { name: "Scheme", scheme: scheme.name };
    alert(JSON.stringify(view), dispatch);
  }, [scheme, dispatch]);

  return (
    <li data-testid="scheme">
      <p>
        <strong>{scheme.name}</strong>
        <br />
        <button onClick={goScheme}>view</button>
      </p>
    </li>
  );
}
