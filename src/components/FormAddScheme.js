import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { schemeAdded } from "../store/schemes/actions";

export function FormAddScheme() {
  const dispatch = useDispatch();

  const nameRef = useRef();

  const add = useCallback(() => {
    const name = nameRef.current.value;
    const scheme = { name };

    // hint: replace the alert for the dispatch
    // alert(JSON.stringify(scheme), dispatch);
    dispatch(schemeAdded(scheme));

    nameRef.current.value = "";
  }, [dispatch]);

  return (
    <div className="Box Card" data-testid="add-scheme">
      <strong>Add Villain</strong>
      <br />
      <label>
        Name: <input ref={nameRef} />
      </label>
      <br />
      <button onClick={add}>Add</button>
    </div>
  );
}
