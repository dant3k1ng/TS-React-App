import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../api/User";
import { setUser } from "../../redux/actions/UserAction";
import MainLayout from "../Layout/MainLayout";
import Content from "./Content";

function MainPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    getUser()
      .then(response => response.json())
      .then(data => {
        dispatch(setUser(data));
      });
  })

  return (
    <MainLayout >
      <Content/>
    </MainLayout>
  );
}

export default MainPage;
