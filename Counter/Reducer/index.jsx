import { combineReducers } from "redux";
import decrementReducer from "./DecrementReducer";
import nameReducer from "./nameReducsr";


const combineReducer = combineReducers({
 Counter: decrementReducer,
 Name: nameReducer
})

export default combineReducer;