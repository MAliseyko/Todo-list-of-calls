import "./App.css";
import AddCall from "./components/AddCall/AddCall";
import CallList from "./components/CallList/CallList";
import NextCall from "./components/NextCall/NextCall";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NextCall></NextCall>
        <div>
          <AddCall></AddCall>
          <CallList></CallList>
        </div>
      </div>
    </Provider>
  );
}

export default App;
