import styled from "styled-components";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainPageWrapper = styled.div``;

const Container = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
`;

const SidebarWrapper = styled.div`
  width: 300px;
`;

interface IProps {
  children: JSX.Element;
}

const MainLayout = ( { children }: IProps ) => {
  return (
    <MainPageWrapper>
      <Header />
      <Container>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        {children}
      </Container>
    </MainPageWrapper>
  );
}

export default MainLayout;
