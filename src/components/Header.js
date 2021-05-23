import { useCallback } from "react";
import { useDispatch } from "react-redux";

export function Header() {
  const dispatch = useDispatch();

  const goHome = useCallback(() => {
    alert("goHome", dispatch);
  }, [dispatch]);
  const goVillains = useCallback(() => {
    alert("goVillains", dispatch);
  }, [dispatch]);
  const goSchemes = useCallback(() => {
    alert("goSchemes", dispatch);
  }, [dispatch]);
  const goBack = useCallback(() => {
    alert("goBack", dispatch);
  }, [dispatch]);

  return (
    <header className="Row Box" data-testid="header">
      <p>
        <button onClick={goHome}>Home</button>
        <button onClick={goVillains}>Villains</button>
        <button onClick={goSchemes}>Schemes</button>
        <button onClick={goBack}>Back</button>
      </p>
    </header>
  );
}
