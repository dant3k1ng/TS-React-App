import React from "react";
import styled from "styled-components";
import Header from "../../shared/components/Header/Header";

const MainPageWrapper = styled.div`
`;

class MainPage extends React.Component 
{
    render() 
    {
      return (
        <MainPageWrapper>
            <Header/>
        </MainPageWrapper>
      );
    }
}
  
export default MainPage;
  