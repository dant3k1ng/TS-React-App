import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const reducers = {
    'user': UserReducer
}

export default combineReducers(reducers);