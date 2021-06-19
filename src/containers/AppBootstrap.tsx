import AppRouter from "./Router/AppRouter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../api/User";
import { setUser } from "../redux/actions/UserAction";
import { getWorkspaces } from "../api/Workspace";
import { setWorkspace } from "../redux/actions/WorkspaceAction";
import { getPhoto } from "../api/Photo";
import { setUserPhoto } from "../redux/actions/UserPhotoAction";
import { UserData } from "../entities/UserData";
import { setUserData } from "../redux/actions/UserDataAction";

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

    function getFakeUserData()
    {
      const obj: UserData = {
        expertise: {"e4356ff" : "Mergers and acquisition"},
        specialties: {"s46354543" : "Cross border operation", "s56756856" : "Transaction over 500M€/$"},
        admission: {"a879565" : "Paris bar association", "a5674345" : "Tunisian bar association"},
        counties: {"c6486796" : "Tunisia"},
        informations: {
          hourlyFee: "610€/hour",
          hourlyFeeNegociated: true,
        },
        terms: {},
        services: {
          "1": "Corporate M&A and international acqusitions",
        }
      }

      dispatch(setUserData(obj));
    }

    getFakeUserData();
    getUserData();
    getWorkspaces()
      .then(response => {
        dispatch(setWorkspace(response))
      });    
  });


  return <AppRouter />
}

export default AppBootstrap;
