import { combineReducers } from "redux";
import { IUser } from "../../entities/User";
import UserReducer from "./UserReducer";

export interface IGlobalState {
    user: IUser|null;
}

const reducers = {
    'user': UserReducer
}

export default combineReducers(reducers);