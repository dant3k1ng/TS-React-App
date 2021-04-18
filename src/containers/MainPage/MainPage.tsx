import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getUser } from "../../api/User";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { setUser } from "../../redux/actions/UserAction";

const MainPageWrapper = styled.div``;
const ContentWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
`;

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
    <MainPageWrapper>
      <Header />
      <ContentWrapper>
        <Sidebar />
        <div>
          content
        </div>
      </ContentWrapper>
    </MainPageWrapper>
  );
}

export default MainPage;
