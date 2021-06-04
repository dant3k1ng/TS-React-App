import { combineReducers } from "redux";
import { IUser } from "../../entities/User";
import { IWorkspace } from "../../entities/Workspace";
import UserReducer from "./UserReducer";
import WorkspaceReducer from "./WorkspaceReducer";

export interface IGlobalState {
    user: IUser|null;
    workspaces: IWorkspace[]|null;
}

const reducers = {
    'user': UserReducer,
    'workspace' : WorkspaceReducer,
}

export default combineReducers(reducers);