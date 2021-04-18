import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainPageWrapper = styled.div`
`;

const ContentWrapper = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
`;

class MainPage extends React.Component 
{
    render() 
    {
      return (
        <MainPageWrapper>
            <Header/>
            <ContentWrapper>
              <Sidebar/>
              <div>
                content
              </div>
            </ContentWrapper>
        </MainPageWrapper>
      );
    }
}
  
export default MainPage;
  