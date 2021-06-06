import AppRouter from "./Router/AppRouter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../api/User";
import { setUser } from "../redux/actions/UserAction";
import { getWorkspaces } from "../api/Workspace";
import { setWorkspace } from "../redux/actions/WorkspaceAction";
import { getPhoto } from "../api/Photo";
import { setUserPhoto } from "../redux/actions/UserPhotoAction";

function AppBootstrap() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserData()
    {
      const user = await getUser()
        .then(response => response.json())
        .then(data => {
          dispatch(setUser(data));
          return data;
        });

      if("id" in user) {
        getPhoto(user.id)
          .then(response => response.json())
          .then(data => {
            dispatch(setUserPhoto(data));
          });
      }
    }

    getUserData();
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
