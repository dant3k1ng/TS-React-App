import styled from "styled-components";
import { Item, Image, Text } from "../../../shared/styledHelpers/components/Dropdown/styles";

const ItemsContainer = styled.div`
    padding: 0 12px;
`;

export default function Platform() {
    return (
        <ItemsContainer>
            <Item>
                <Image src="./img/icons/house2.svg" alt="home"/>
                <Text>Home</Text>
            </Item>
            <Item>
                <Image src="./img/icons/publications.svg" alt="publications"/>
                <Text>Publications</Text>
            </Item>
            <Item>
                <Image src="./img/icons/people.svg" alt="people"/>
                <Text>People</Text>
            </Item>
            <Item>
                <Image src="./img/icons/entities2.svg" alt="entities"/>
                <Text>Entities</Text>
            </Item>
            <Item>
                <Image src="./img/icons/administration.svg" alt="administration"/>
                <Text>Administration</Text>
            </Item>
        </ItemsContainer>
    );
}