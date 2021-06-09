import styled from "styled-components";
import Works from "../../components/Works/Works";
import LatestPublications from "../../components/Publications/LatestPublications";
import Workspaces from "../../components/Workspaces/Workspaces";
import Color from "../../shared/styleHelpers/Colors";
import { useState } from "react";
import SearchInput from "../../shared/components/SearchInput";

const LabelText = styled.span`
  font-size: 1.25rem;
  font-family: "AppFontBold";
  color: ${Color.Fiord};
`;

const LabelHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 15px;
`;

const ResumeWorkHeaderContainer = styled(LabelHeaderContainer)`
    display: flex;
    justify-content: space-between;
`;

const ResumeWorkOptions = styled.div`
    display: flex;
    flex-direction: row;
`;

const FollowedButton = styled.button`
  margin: 0 15px 0 22px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  color: ${Color.blue};

  &:hover {
    cursor: pointer;
  }
`;

const FollowedButtonText = styled.span`
  padding: 0 7px;
`;

const SearchWrapper = styled.div`
  width: 200px;
  height: 100%;
`;

const FollowedFilterColor = styled.object`
  filter: invert(39%) sepia(30%) saturate(1297%) hue-rotate(177deg) brightness(94%) contrast(88%);
`;

const FollowedImg = styled(FollowedFilterColor)``;
const FollowedArrowDown = styled(FollowedFilterColor)``;

function Content() {
  const [inputText, setInputText] = useState("");
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInputText(text);
  }

  return (
    <>
      <LatestPublications />
      <LabelHeaderContainer>
        <LabelText>Workspaces</LabelText>
      </LabelHeaderContainer>
      <Workspaces />
      <ResumeWorkHeaderContainer>
        <LabelText>Resume your work</LabelText>
        <ResumeWorkOptions>
          <SearchWrapper>
            <SearchInput inputChangeHandler={inputChangeHandler} placeholder="Filter by title..."/>
          </SearchWrapper>
          <FollowedButton>
            <FollowedImg type="image/svg+xml" data="img/icons/follow.svg" />
            <FollowedButtonText>Followed</FollowedButtonText>
            <FollowedArrowDown type="image/svg+xml" data="img/icons/arrow-down.svg" />
          </FollowedButton>
        </ResumeWorkOptions>
      </ResumeWorkHeaderContainer>
      <Works filterText={inputText} />
    </>
  );
}

export default Content;
