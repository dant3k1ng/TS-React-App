import styled from "styled-components";
import Color from "../../../../shared/styleHelpers/Colors";
import FontSize from "../../../../shared/styleHelpers/FontSizes";

const ContentFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20px;
`;

const Date = styled.span`
    color: ${Color.gray};
    font-size: ${FontSize[85]};
`;

const AuthorImage = styled.img`
    border-radius: 100%;
    object-fit: cover;
    width: 20px;
    height: 20px;
    margin: 0 12px;
`;

const AuthorName = styled.span`
    font-size: ${FontSize[85]};
    color: ${Color.darkBlue};
`;

function ContentFooter() {
    const date = "7 Jan. 2020";
    const authorName = "John Doe";

    return (
        <ContentFooterContainer>
            <Date className="date">{date}</Date>
            <AuthorImage src="img/avatar.jpg" alt="author"/>
            <AuthorName className="author-name">{authorName}</AuthorName>
        </ContentFooterContainer>
    );
}

export default ContentFooter;
