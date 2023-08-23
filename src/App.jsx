import { Provider } from "react-redux";
import MainComponent from "./components/MainComponent";
import Store from "./redux/Store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={Store}>
          <MainComponent />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
