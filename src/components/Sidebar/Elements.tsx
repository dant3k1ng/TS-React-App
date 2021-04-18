import styled from "styled-components";
import Color from "../../shared/styleHelpers/Colors";

const ItemsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    height: 34px;

    &:hover {
        cursor: pointer;
    }
`;

const ItemImage = styled.img`
    width: 22px;
    margin: 0 12px;
    height: auto;
`;

const ItemText = styled.span`
    font-weight: 700;
    font-size: 0.9rem;
    color: ${Color.darkBlue};
`;

export default function Elements() 
{
    return (
        <ItemsContainer>
            <Item>
                <ItemImage src="./img/icons/publications.svg" alt="Publications"/>
                <ItemText>Publications</ItemText>
            </Item>
            <Item>
                <ItemImage src="./img/icons/ecosystem.svg" alt="Ecosystems"/>
                <ItemText>Ecosystems</ItemText>
            </Item>
            <Item>
                <ItemImage src="./img/icons/entities2.svg" alt="Entities"/>
                <ItemText>Entities</ItemText>
            </Item>
        </ItemsContainer>
    );
}