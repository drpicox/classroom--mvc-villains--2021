import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSchemes } from "../store/schemes/selectors";
import { viewPushed } from "../store/views/actions";
import { FormAddScheme } from "./FormAddScheme";

export function ViewSchemes() {
  // const schemes = schemeExamples;
  const schemes = useSelector(selectSchemes);
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
    // alert(JSON.stringify(view), dispatch);
    dispatch(viewPushed(view));
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
