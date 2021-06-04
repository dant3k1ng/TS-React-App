import AppRouter from "./Router/AppRouter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../api/User";
import { setUser } from "../redux/actions/UserAction";
import { getWorkspaces } from "../api/Workspace";
import { setWorkspace } from "../redux/actions/WorkspaceAction";

function AppBootstrap() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
      .then(response => response.json())
      .then(data => {
        dispatch(setUser(data));
      });
  });

  useEffect(() => {
    getWorkspaces()
      .then(response => {
        dispatch(setWorkspace(response))
      })
  })

  return <AppRouter />
}

export default AppBootstrap;
