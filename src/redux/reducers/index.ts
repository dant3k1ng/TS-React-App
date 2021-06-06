import { combineReducers } from "redux";
import { IUser } from "../../entities/User";
import { IWorkspace } from "../../entities/Workspace";
import UserReducer from "./UserReducer";
import WorkspaceReducer from "./WorkspaceReducer";
import LayoutReducer from "./LayoutReducer";
import { Layout } from "../../helpers/Layout";

export interface IGlobalState {
    user: IUser|null;
    workspaces: IWorkspace[]|null;
    layout: Layout
}

const reducers = {
    user: UserReducer,
    workspaces : WorkspaceReducer,
    layout : LayoutReducer,
}

export default combineReducers(reducers);