import { createStore } from "redux";
import reducers from "./reducer";

export function configureStore() {
  return createStore(reducers);
}
export const store = configureStore();
export default store;
