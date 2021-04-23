import styled from "styled-components";
import Color from "../../shared/styleHelpers/Colors";
import Publication from "./Latest/Publication";
import Title from "./Latest/Title";

const LatestPublicationsWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #e9e9e9;
    box-shadow: 0px 2px 3px 0px #cccccc;
`;

const BigImage = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageContainer = styled.div`
    height: 300px;
    width: 300px;
    overflow: hidden;
`;

const ContentContainer = styled.div`
    background-color: white;
    width: calc(100% - 300px);
    padding: 5px 15px;
`;

const TitleWrapper = styled.div`
    height: 25px;
`;

const SeeMoreTextWrapper = styled.div`
    height: 25px;
    display: flex;
    align-items: center;
`;

const SeeMore = styled.span`
    color: ${Color.blue};
    font-weight: 900;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 50px);
`;

function LatestPublications() {

    return (
        <LatestPublicationsWrapper>
            <ImageContainer>
                <BigImage src="img/new-york-1804220_1280.jpg" alt="publications main"/>
            </ImageContainer>
            <ContentContainer>
                <TitleWrapper>
                    <Title/>
                </TitleWrapper>
                <Items>
                    <Publication/>
                    <Publication/>
                    <Publication/>
                </Items>
                <SeeMoreTextWrapper>
                    <SeeMore>See more publications</SeeMore>
                </SeeMoreTextWrapper>
            </ContentContainer>
        </LatestPublicationsWrapper>
    );
}

export default LatestPublications;
