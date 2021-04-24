import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getUser } from "../../api/User";
import Header from "../../components/Header/Header";
import LatestPublications from "../../components/Publications/LatestPublications";
import Sidebar from "../../components/Sidebar/Sidebar";
import { setUser } from "../../redux/actions/UserAction";
import Color from "../../shared/styleHelpers/Colors";

const MainPageWrapper = styled.div``;
const Container = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
`;

const SidebarWrapper = styled.div`
  width: 300px;
`;

const ContentWrapper = styled.div`
  width: calc(100% - 300px);
  padding-right: 64px;
  display: flex;
  flex-direction: column;
`;

const LabelText = styled.span`
  padding: 12px 15px;
  font-size: 1.25rem;
  font-family: "AppFontBold";
  color: ${Color.Fiord};
  margin: 8px 0 2px 0;
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
      <Container>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentWrapper>
          <LatestPublications/>
          <LabelText>Workspaces</LabelText>
          <LabelText>Resume your work</LabelText>
        </ContentWrapper>
      </Container>
    </MainPageWrapper>
  );
}

export default MainPage;
