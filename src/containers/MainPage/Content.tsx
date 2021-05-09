import styled from "styled-components";
import Works from "../../components/Works/Works";
import LatestPublications from "../../components/Publications/LatestPublications";
import Workspaces from "../../components/Workspaces/Workspaces";
import Color from "../../shared/styleHelpers/Colors";

const ContentWrapper = styled.div`
  width: calc(100% - 300px);
  padding-right: 64px;
  display: flex;
  flex-direction: column;
`;

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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 100%;
    position: relative;
`;

const SearchInput = styled.input`
    border-radius: 3px;
    border: 1px solid #E8E8E8;
    font-size: 1.1em;
    padding: 6px 32px 6px 6px;
    width: 100%;

    &:focus {
      outline: none;
    }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 8px;
`;

const FollowedFilterColor = styled.object`
    filter: invert(39%) sepia(30%) saturate(1297%) hue-rotate(177deg) brightness(94%) contrast(88%);
`;

const FollowedImg = styled(FollowedFilterColor)``;
const FollowedArrowDown = styled(FollowedFilterColor)``;

function Content() {

    return (
        <ContentWrapper>
            <LatestPublications />
            <LabelHeaderContainer>
                <LabelText>Workspaces</LabelText>
            </LabelHeaderContainer>
            <Workspaces />
            <ResumeWorkHeaderContainer>
                <LabelText>Resume your work</LabelText>
                <ResumeWorkOptions>
                    <SearchWrapper>
                        <SearchInput type="text" placeholder="Filter by title..." />
                        <SearchIcon src="img/icons/search.png" />
                    </SearchWrapper>
                    <FollowedButton>
                        <FollowedImg type="image/svg+xml" data="img/icons/follow.svg" />
                        <FollowedButtonText>Followed</FollowedButtonText>
                        <FollowedArrowDown type="image/svg+xml" data="img/icons/arrow-down.svg"/>
                    </FollowedButton>
                </ResumeWorkOptions>
            </ResumeWorkHeaderContainer>
            <Works />
        </ContentWrapper>
    );
}

export default Content;
