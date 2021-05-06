import styled from "styled-components";
import { IPost } from "../../../../api/Post";
import Color from "../../../../shared/styleHelpers/Colors";
import FontSize from "../../../../shared/styleHelpers/FontSizes";

const ItemContainer = styled.div`
    box-shadow: 0px 2px 3px 0px #cccccc;
    background-color: white;
    margin-bottom: 8px;
    padding: 6px 12px;
`;

const Title = styled.h2`
    color: ${Color.blue};
    font-weight: 900;
`;

const Content = styled.p`
    padding: 8px 0;
    color: ${Color.darkGray};
`;

const Footer = styled.div``;

const Dot = styled.span`
    color: ${Color.gray};
    padding: 0 6px;
`;

const CompanyName = styled.span`
    font-size: ${FontSize[85]};
    color: ${Color.darkGray};
`;

const JobType = styled.span`
    font-size: ${FontSize[85]};
    color: ${Color.darkGray};
`;

const UserInfo = styled.span`
    font-size: ${FontSize[85]};
    color: ${Color.gray};
`;

interface IProps
{
    post: IPost;
}
export default function Work(props: IProps)
{
    return (
        <ItemContainer>
            <Title>{props.post.title}</Title>
            <Content>{props.post.body}</Content>
            <Footer>
                <CompanyName>Subsid. corp.</CompanyName>
                <Dot>&#x2022;</Dot>
                <JobType>Corporate</JobType>
                <Dot>&#x2022;</Dot>
                <UserInfo>Updated 3 days ago by John Doe</UserInfo>
            </Footer>
        </ItemContainer>
    );
}