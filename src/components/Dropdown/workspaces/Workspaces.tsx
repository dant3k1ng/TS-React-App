import styled from "styled-components";
import { Item, Image, Text } from "../../../shared/styleHelpers/components/Dropdown/styles";

const ItemsContainer = styled.div`
    padding: 0 12px;
`;

interface IProps {
    filterText: string;
}
function Workspaces(props: IProps) {
    return (
        <ItemsContainer>
            <Item>
                <Image src="./img/icons/entities2.svg" alt="client contract"/>
                <Text>Client contract</Text>
            </Item>
            <Item>
                <Image src="./img/icons/entities2.svg" alt="supplier contract"/>
                <Text>Supplier contract</Text>
            </Item>
            <Item>
                <Image src="./img/icons/entities2.svg" alt="corporate"/>
                <Text>Corporate</Text>
            </Item>
            <Item>
                <Image src="./img/icons/entities2.svg" alt="group norms"/>
                <Text>Group Norms</Text>
            </Item>
            <Item>
                <Image src="./img/icons/entities2.svg" alt="real estate contracts"/>
                <Text>Real estate contracts</Text>
            </Item>
        </ItemsContainer>
    );
}

export default Workspaces;