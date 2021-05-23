import { Provider } from "react-redux";
import { Main } from "./components/Main";
import { Header } from "./components/Header";

export function App({ store }) {
  return (
    <Provider store={store}>
      <div className="Column">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}
