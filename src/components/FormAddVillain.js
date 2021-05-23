import { useRef, useCallback } from "react";
import { useDispatch } from "react-redux";

export function FormAddVillain() {
  const dispatch = useDispatch();

  const nameRef = useRef();
  const powerRef = useRef();
  const levelRef = useRef();

  const add = useCallback(() => {
    const name = nameRef.current.value;
    const power = powerRef.current.value;
    const level = +levelRef.current.value;
    const villain = { name, power, level };

    // hint: replace the alert for the dispatch
    alert(JSON.stringify(villain), dispatch);

    nameRef.current.value = "";
    powerRef.current.value = "";
    levelRef.current.value = 0;
  }, [dispatch]);

  return (
    <div className="Box Card" data-testid="add-villain">
      <strong>Add Villain</strong>
      <br />
      <label>
        Name: <input ref={nameRef} />
      </label>
      <br />
      <label>
        Power: <input ref={powerRef} />
      </label>
      <br />
      <label>
        Level: <input ref={levelRef} type="number" />
      </label>
      <br />
      <button onClick={add}>Add</button>
    </div>
  );
}
