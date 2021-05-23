import styled from "styled-components";
import Color from "../../shared/styleHelpers/Colors";
import ContentFooter from "./Latest/Publication/ContentFooter";
import PublicationItem from "./Latest/PublicationItem";
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
    transition: transform .45s;
    filter: blur(1px);
`;

const ImageContainer = styled.div`
    height: 300px;
    width: 300px;
    overflow: hidden;
    position: relative;

    &:hover {
        cursor: pointer;
    }

    &:hover > img {
        transform: scale(1.12);
        filter: blur(0px);
    }
`;

const ImageAbsoluteContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 10px 10px 30px 10px;
`;

const ImageTitle = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-weight: 900;
    color: ${Color.darkWhite};
    line-height: 1.35rem;
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

const ContentFooterWrapper = styled.div`
    margin: 3px 0;

    .author-name,
    .date {
        color: ${Color.darkWhite};
    }
`;

function LatestPublications() {
    return (
        <LatestPublicationsWrapper>
            <ImageContainer>
                <BigImage src="img/publications.png" alt="publications main" />
                <ImageAbsoluteContainer>
                    <ImageTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim odio, ullamcorper vitae semper eget, aliquam eget est.
                    </ImageTitle>
                    <ContentFooterWrapper>
                        <ContentFooter />
                    </ContentFooterWrapper>
                </ImageAbsoluteContainer>
            </ImageContainer>
            <ContentContainer>
                <TitleWrapper>
                    <Title />
                </TitleWrapper>
                <Items>
                    <PublicationItem />
                    <PublicationItem />
                    <PublicationItem />
                </Items>
                <SeeMoreTextWrapper>
                    <SeeMore>See more publications</SeeMore>
                </SeeMoreTextWrapper>
            </ContentContainer>
        </LatestPublicationsWrapper>
    );
}

export default LatestPublications;
