import { combineReducers } from "redux";
import ProductReducer from "./reducers/ProductReducer";

const RootReducer = combineReducers({
  ProductReducer,
});

export default RootReducer;
