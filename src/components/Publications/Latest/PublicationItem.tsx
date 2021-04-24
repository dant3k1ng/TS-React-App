import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import ContentFooter from "./Publication/ContentFooter";

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

function PublicationItem() {
    return (
        <PublicationContainer>
            <Image src="img/man-5710164_640.jpg" alt="item"/>
            <Content>
                <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim odio, ullamcorper vitae semper eget, aliquam eget est.</Title>
                <ContentFooter/>
            </Content>
        </PublicationContainer>
    );
}

export default PublicationItem;
