import AppRouter from "./Router/AppRouter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../api/User";
import { setUser } from "../redux/actions/UserAction";

function AppBootstrap() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
      .then(response => response.json())
      .then(data => {
        dispatch(setUser(data));
      });
  });

  return <AppRouter />
}

export default AppBootstrap;
