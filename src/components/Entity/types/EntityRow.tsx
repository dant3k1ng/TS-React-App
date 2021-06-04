import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import { IEntity } from "../interfaces/IEntity";

const EntityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 2px 5px 10px #ECECEC;
    background-color: white;
    border-radius: 4px;
    padding: 8px;
    width: 100%;
    height: max-content;
    margin-bottom: 5px;
`;

const ImageWrapper = styled.div`
    width: 48px;
    min-width: 48px;
    height: 48px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 8px;
`;

const Title = styled.span`
    color: ${Color.blue};
    font-weight: 900;
`;

const Description = styled.span`
    color: ${Color.gray};
`;

interface IProps {
    entity: IEntity;
}

function EntityRow(props: IProps) 
{
    return (
        <EntityWrapper>
            <ImageWrapper>
                <Image src={props.entity.imageUrl} alt="image"/>
            </ImageWrapper>
            <ContentWrapper>
                <Title>{props.entity.title}</Title>
                <Description>{props.entity.description}</Description>
            </ContentWrapper>
        </EntityWrapper>
    );
}

export default EntityRow;
