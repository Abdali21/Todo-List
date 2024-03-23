import { createStore } from "redux";
import reducerTodo from "../reducers/reducer";
const store = createStore(reducerTodo);

export default store;