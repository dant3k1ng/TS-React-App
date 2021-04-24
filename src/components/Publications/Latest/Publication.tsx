import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import FontSize from "../../../shared/styleHelpers/FontSizes";

const PublicationContainer = styled.div`
    height: 80px;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
`;

const Image = styled.img`
    height: 70px;
    width: 70px;
    object-fit: cover;
`;

const Content = styled.div`
    padding: 2px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContentFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20px;
`;

const Date = styled.span`
    color: ${Color.gray};
    font-size: ${FontSize[90]};
`;

const AuthorImage = styled.img`
    border-radius: 100%;
    object-fit: cover;
    width: 20px;
    height: 20px;
    margin: 0 12px;
`;

const AuthorName = styled.span`
    font-size: ${FontSize[90]};
    font-weight: 900;
    color: ${Color.darkBlue};
`;

const Title = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 900;
    color: ${Color.darkBlue};
    line-height: 1.2rem;
`;

function Publication() {
    const date = "7 Jan. 2020";
    const authorName = "John Doe";

    return (
        <PublicationContainer>
            <Image src="img/man-5710164_640.jpg" alt="item"/>
            <Content>
                <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim odio, ullamcorper vitae semper eget, aliquam eget est.</Title>
                <ContentFooter>
                    <Date>{date}</Date>
                    <AuthorImage src="img/avatar.jpg" alt="author"/>
                    <AuthorName>{authorName}</AuthorName>
                </ContentFooter>
            </Content>
        </PublicationContainer>
    );
}

export default Publication;
